/* Live National Park Service alerts — closures, road status, weather warnings.
   One request per session, cached for three hours, because DEMO_KEY is rate
   limited. Drop a personal key in localStorage.usa2k26.npskey to lift that. */
const Alerts = (() => {
  const PARKS = {
    grte: 'Grand Teton',
    yell: 'Yellowstone',
    glac: 'Glacier',
    mora: 'Mount Rainier',
    noca: 'North Cascades'
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

  const card = a => `
    <article class="alert cat-${a.cat.replace(/\W+/g, '').toLowerCase()}">
      <div class="ahead">
        <span class="acat">${a.cat}</span>
        <span class="apark">${PARKS[a.park] || a.park}</span>
      </div>
      <h4>${a.title}</h4>
      ${a.body ? `<p>${a.body.slice(0, 300)}${a.body.length > 300 ? '…' : ''}</p>` : ''}
      ${a.url ? `<a href="${a.url}" target="_blank" rel="noopener">Read on nps.gov ↗</a>` : ''}
    </article>`;

  /* Fill a container with the alerts for the given park codes. */
  async function mount(node, codes) {
    if (!node) return;
    const all = await load();
    const list = codes ? all.filter(a => codes.includes(a.park)) : all;
    if (!all.length) {
      node.innerHTML = '<p class="anone">Could not reach the park service just now.</p>';
      return;
    }
    node.innerHTML = list.length
      ? list.map(card).join('')
      : '<p class="anone">No alerts posted for this park right now.</p>';
    const badge = document.getElementById('alertcount');
    if (badge && !codes) {
      const shut = all.filter(a => a.cat === 'Park Closure' || a.cat === 'Danger').length;
      badge.textContent = shut ? `${all.length} · ${shut} closures` : `${all.length}`;
    }
  }

  return { mount, load, parksForDay: n => BY_DAY[n] || null, name: c => PARKS[c] };
})();

/* Top-level panel, filled only when opened. */
(() => {
  const box = document.getElementById('alerts');
  const wrap = document.getElementById('alerts-wrap');
  if (!box || !wrap) return;
  wrap.addEventListener('toggle', () => {
    if (wrap.open && !box.dataset.done) { box.dataset.done = '1'; Alerts.mount(box, null); }
  }, { once: false });
  Alerts.load().then(l => {
    const b = document.getElementById('alertcount');
    if (!b) return;
    const shut = l.filter(a => a.cat === 'Park Closure' || a.cat === 'Danger').length;
    b.textContent = l.length ? (shut ? `${l.length} · ${shut} urgent` : `${l.length}`) : '';
  });
})();
