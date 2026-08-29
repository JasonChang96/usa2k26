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

  /* Getting somewhere, or not being able to. */
  const ROADS = /\b(road|roads|highway|hwy|route|rte|pass|parkway|drive|entrance|gate|parking|bridge|tunnel|construction|detour|closed to (vehicle|traffic)|one[- ]way|delay|shuttle|access)\b/i;
  const WEATHER = /\b(snow|snowfall|ice|icy|storm|flood|flooding|wind|fire|wildfire|smoke|air quality|avalanche|freez|winter conditions|weather)\b/i;
  /* Things that are somebody else's trip. */
  const NOISE = /\b(campground|campsite|camping|permit|backcountry|wilderness|fishing|fish|boat launch|marina|dock|horse|stock|pack animal|hunting|volunteer|employment|job|internship|artist|wedding|special use|lottery|ranger program|junior ranger|visitor center hours|bookstore|gift shop|pets?|dog|bicycle registration)\b/i;

  /* Place names lifted straight out of the itinerary, so an alert that names a
     stop we are actually going to always counts as relevant. */
  const GENERIC = new Set(['lost lake', 'main street', 'the village', 'city beach',
    'front street', 'the falls', 'north rim', 'south rim', 'the loop']);
  let placeIndex = null;
  function placesFor(codes) {
    if (!placeIndex) {
      placeIndex = {};
      for (const [day, parks] of Object.entries(BY_DAY)) {
        const d = (typeof TRIP !== 'undefined' ? TRIP : []).find(x => x.n === +day);
        if (!d) continue;
        const names = d.segments.flatMap(sg => sg.stops.map(st => st.name));
        for (const p of parks) (placeIndex[p] ||= new Set());
        for (const n of names) {
          const clean = n.toLowerCase().replace(/\(.*?\)/g, '').split(/[,–—-]/)[0].trim();
          if (clean.length < 6 || GENERIC.has(clean)) continue;
          for (const p of parks) placeIndex[p].add(clean);
        }
      }
    }
    const out = new Set();
    for (const c of codes || Object.keys(PARKS)) (placeIndex[c] || []).forEach(v => out.add(v));
    return out;
  }

  /* Higher means "this could change our day". */
  function score(a, places) {
    const text = `${a.title} ${a.body}`;
    let n = 0;
    if (a.cat === 'Park Closure') n += 3;
    else if (a.cat === 'Danger') n += 3;
    else if (a.cat === 'Caution') n += 1;
    /* Getting there is the whole point, so anything about roads clears the bar
       on its own — even when the park files it as mere "Information". */
    if (ROADS.test(text)) n += 4;
    if (WEATHER.test(text)) n += 3;
    const low = text.toLowerCase();
    for (const p of places) if (low.includes(p)) { n += 4; a.hit = p; break; }
    if (NOISE.test(text) && !ROADS.test(text)) n -= 5;
    return n;
  }

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
    return {
      keep: scored.filter(a => a.s >= 4),
      rest: scored.filter(a => a.s < 4),
      total: list.length
    };
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
        : '<p class="anone">Nothing affecting roads or the places on our list.</p>') +
      (rest.length ? `<details class="arest">
        <summary>${rest.length} other notice${rest.length > 1 ? 's' : ''} — campgrounds, permits, and the like</summary>
        ${rest.map(card).join('')}
      </details>` : '');
    if (!codes) badge(keep.length, total);
  }

  function badge(keep, total) {
    const b = document.getElementById('alertcount');
    if (b) b.textContent = keep ? `${keep} for us · ${total} total` : `nothing urgent · ${total} total`;
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
      ? `${keep.length} for us · ${total} total`
      : `nothing urgent · ${total} total`;
  });
})();
