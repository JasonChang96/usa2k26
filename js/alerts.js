/* Live National Park Service alerts — closures, road status, weather warnings.
   One request per session, cached for three hours, because DEMO_KEY is rate
   limited. Drop a personal key in localStorage.usa2k26.npskey to lift that. */
const Alerts = (() => {
  const PARKS = {
    grte: 'Grand Teton',
    yell: 'Yellowstone',
    glac: 'Glacier',
    mora: 'Mount Rainier'
    /* North Cascades is on the "maybe" list, not the route. Add
       noca: 'North Cascades' here if it ever makes the itinerary. */
  };
  /* Which parks each day actually touches. */
  const BY_DAY = {
    2: ['grte'], 3: ['grte'],
    4: ['yell'], 5: ['yell', 'glac'],
    6: ['glac'],
    9: ['mora'], 10: ['mora']
  };
  const RANK = { 'Park Closure': 0, 'Danger': 1, 'Caution': 2, 'Information': 3 };
  const TTL = 1000 * 60 * 60 * 3;

  let pending = null;

  async function load() {
    if (pending) return pending;
    try {
      const raw = JSON.parse(localStorage.getItem('usa2k26.alerts') || 'null');
      if (raw && Date.now() - raw.t < TTL) return (pending = Promise.resolve(raw.v));
    } catch {}

    const key = localStorage.getItem('usa2k26.npskey') || 'DEMO_KEY';
    /* The commas in parkCode must stay literal — URLSearchParams escapes them
       to %2C and the API then only honours the first park. */
    const url = 'https://developer.nps.gov/api/v1/alerts?parkCode=' +
      Object.keys(PARKS).join(',') + '&limit=100&api_key=' + encodeURIComponent(key);

    pending = (async () => {
      const j = await (await fetch(url)).json();
      const list = (j.data || []).map(a => ({
        park: a.parkCode,
        cat: a.category || 'Information',
        title: a.title || '',
        body: (a.description || '').trim(),
        url: a.url || ''
      })).sort((x, y) => (RANK[x.cat] ?? 9) - (RANK[y.cat] ?? 9));
      try { localStorage.setItem('usa2k26.alerts', JSON.stringify({ t: Date.now(), v: list })); } catch {}
      return list;
    })().catch(() => []);
    return pending;
  }

  /* Nothing counts unless it actually stops us doing something. */
  const BLOCKER = /\b(clos(e|ed|ure|ures|ing)|no access|not accessible|inaccessible|unavailable|impassable|detour|prohibited|restricted|suspended|cancell?ed|not open|out of service)\b/i;
  /* Roads and ways in. */
  const ROADS = /\b(road|roads|highway|hwy|route|rte|pass|parkway|entrance|gate|bridge|tunnel|parking|lot|access)\b/i;
  /* Somebody else's trip — we are not camping, permitting, fishing or hiking far. */
  const NOISE = /\b(campground|campsite|camping|campfire|permit|backcountry|wilderness|fishing|fish|boat launch|marina|dock|horse|stock|pack animal|hunting|volunteer|employment|job|internship|artist|wedding|special use|lottery|ranger program|junior ranger|bookstore|gift shop|pets?|bicycle|air quality|smoke|elk|bison|wildlife|bear spray|hours|reservation|GPS|line|queue)\b/i;

  const GENERIC = new Set(['lost lake', 'main street', 'the village', 'city beach',
    'front street', 'the falls', 'north rim', 'south rim', 'the loop']);
  let placeIndex = null;
  function placesFor(codes) {
    if (!placeIndex) {
      placeIndex = {};
      for (const [day, parks] of Object.entries(BY_DAY)) {
        const d = (typeof TRIP !== 'undefined' ? TRIP : []).find(x => x.n === +day);
        if (!d) continue;
        for (const p of parks) (placeIndex[p] ||= new Set());
        for (const sg of d.segments) for (const st of sg.stops) {
          const clean = st.name.toLowerCase().replace(/\(.*?\)/g, '').split(/[,–—-]/)[0].trim();
          if (clean.length < 6 || GENERIC.has(clean)) continue;
          for (const p of parks) placeIndex[p].add(clean);
        }
      }
    }
    const out = new Set();
    for (const c of codes || Object.keys(PARKS)) (placeIndex[c] || []).forEach(v => out.add(v));
    return out;
  }

  /* Only two things earn a place: a road we drive, or a stop we planned to see. */
  function score(a, places) {
    const text = `${a.title} ${a.body}`;
    const isClosure = a.cat === 'Park Closure';
    if (!isClosure && !BLOCKER.test(text)) return -99;   // not a blocker at all

    let n = isClosure ? 4 : 2;
    const low = text.toLowerCase();
    let named = null;
    for (const p of places) if (low.includes(p)) { named = p; break; }
    if (named) { n += 6; a.hit = named; }
    if (ROADS.test(text)) n += 4;
    if (a.cat === 'Danger') n += 2;
    if (NOISE.test(text) && !named && !ROADS.test(text)) n -= 8;
    return n;
  }

  const card = a => `
    <article class="alert cat-${a.cat.replace(/\W+/g, '').toLowerCase()}">
      <div class="ahead">
        <span class="acat">${a.cat}${a.hit ? ` · on your route` : ''}</span>
        <span class="apark">${PARKS[a.park] || a.park}</span>
      </div>
      <h4>${a.title}</h4>
      ${a.body ? `<p>${a.body.slice(0, 300)}${a.body.length > 300 ? '…' : ''}</p>` : ''}
      ${a.url ? `<a href="${a.url}" target="_blank" rel="noopener">Read on nps.gov ↗</a>` : ''}
    </article>`;

  /* Fill a container with the alerts for the given park codes. */
  /* Split a park's alerts into the ones that could change our day and the rest. */
  async function sift(codes) {
    const all = await load();
    const list = codes ? all.filter(a => codes.includes(a.park)) : all;
    const places = placesFor(codes);
    const scored = list.map(a => ({ ...a, s: score(a, places) }))
      .sort((x, y) => y.s - x.s || (RANK[x.cat] ?? 9) - (RANK[y.cat] ?? 9));
    /* Five is the most anyone reads before it becomes wallpaper. */
    const keep = scored.filter(a => a.s >= 8).slice(0, 5);
    return { keep, rest: scored.filter(a => !keep.includes(a)), total: list.length };
  }

  async function mount(node, codes) {
    if (!node) return;
    const { keep, rest, total } = await sift(codes);
    if (!total) {
      node.innerHTML = `<p class="anone">${(await load()).length
        ? 'No alerts posted for this park right now.'
        : 'Could not reach the park service just now.'}</p>`;
      return;
    }
    node.innerHTML =
      (keep.length
        ? keep.map(card).join('')
        : '<p class="anone">Nothing closed on our roads or at our stops. All clear.</p>') +
      (rest.length ? `<details class="arest">
        <summary>${rest.length} other notice${rest.length > 1 ? 's' : ''} we can ignore</summary>
        ${rest.map(card).join('')}
      </details>` : '');
    if (!codes) badge(keep.length, total);
  }

  function badge(keep, total) {
    const b = document.getElementById('alertcount');
    if (b) b.textContent = keep
      ? `${keep} affecting us · ${total} total`
      : `nothing closed · ${total} total`;
  }

  return { mount, load, sift, parksForDay: n => BY_DAY[n] || null, name: c => PARKS[c] };
})();

/* Top-level panel, filled only when opened. */
(() => {
  const box = document.getElementById('alerts');
  const wrap = document.getElementById('alerts-wrap');
  if (!box || !wrap) return;
  wrap.addEventListener('toggle', () => {
    if (wrap.open && !box.dataset.done) { box.dataset.done = '1'; Alerts.mount(box, null); }
  }, { once: false });
  Alerts.sift(null).then(({ keep, total }) => {
    const b = document.getElementById('alertcount');
    if (b && total) b.textContent = keep.length
      ? `${keep.length} affecting us · ${total} total`
      : `nothing closed · ${total} total`;
  });
})();
