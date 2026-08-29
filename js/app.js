const enc = encodeURIComponent;
const $  = s => document.querySelector(s);
const el = (h) => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstElementChild; };

const LEGS = [
  { to: 3,  name: 'Utah & the Tetons' },
  { to: 6,  name: 'Yellowstone & Glacier' },
  { to: 10, name: 'West to the coast' },
  { to: 16, name: 'Seattle & Vancouver' }
];
const legOf = n => (LEGS.find(l => n <= l.to) || LEGS[LEGS.length - 1]).name;

const allSegments = () => TRIP.flatMap(d => d.segments.map(s => ({ ...s, day: d })));
const findSeg = id => allSegments().find(s => s.id === id);
const fmtDate = iso => new Date(iso + 'T12:00:00')
  .toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });

/* ---------------- maps ---------------- */
function mapSrc(m) {
  if (!m) return null;
  return m.from && m.to
    ? `https://www.google.com/maps?saddr=${enc(m.from)}&daddr=${enc(m.to)}&output=embed`
    : `https://www.google.com/maps?q=${enc(m.center)}&z=${m.zoom || 14}&output=embed`;
}
function mapHref(m) {
  if (!m) return '#';
  return m.from && m.to
    ? `https://www.google.com/maps/dir/?api=1&origin=${enc(m.from)}&destination=${enc(m.to)}`
    : `https://www.google.com/maps/search/?api=1&query=${enc(m.center)}`;
}
/* Leaflet map with numbered pins. No API key, minimal Carto basemap. */
const TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTR  = '&copy; OpenStreetMap contributors';

function pin(n, tone) {
  return L.divIcon({
    className: '',
    html: `<span class="mk ${tone || ''}">${n}</span>`,
    iconSize: [26, 26], iconAnchor: [13, 13], popupAnchor: [0, -14]
  });
}

/* pts: [{name, ll, label}]  ·  line: draw a path between them */
function drawMap(node, pts, opts = {}) {
  const map = L.map(node, {
    scrollWheelZoom: false, zoomControl: true, attributionControl: true
  });
  L.tileLayer(TILES, { attribution: ATTR, maxZoom: 19 }).addTo(map);

  const good = pts.filter(p => p.ll);
  if (!good.length) {
    node.innerHTML = '<div class="nomap">No pins for this one — use the Google Maps link.</div>';
    return;
  }
  if (opts.line && good.length > 1) {
    L.polyline(good.map(p => p.ll), {
      color: '#B06B4C', weight: 2.5, opacity: .75, dashArray: '5 6'
    }).addTo(map);
  }
  good.forEach((p, i) => {
    L.marker(p.ll, { icon: pin(p.label ?? i + 1, p.tone) })
      .addTo(map)
      .bindPopup(`<b>${p.name}</b>`);
  });
  if (good.length === 1) map.setView(good[0].ll, opts.zoom || 14);
  else map.fitBounds(L.latLngBounds(good.map(p => p.ll)), { padding: [34, 34] });
  setTimeout(() => map.invalidateSize(), 60);
}

/* Deferred so the container has a size before Leaflet measures it. */
function mountMap(id, pts, opts) {
  requestAnimationFrame(() => {
    const node = document.getElementById(id);
    if (node) drawMap(node, pts, opts);
  });
}

function segPoints(s) {
  const pts = (s.stops || [])
    .map((st, i) => ({ name: st.name, ll: st.ll, label: i + 1 }))
    .filter(p => p.ll);
  if (pts.length) return pts;
  /* No stop could be geocoded — fall back to the segment's own anchor. */
  const m = s.map || {};
  if (m.fromll || m.toll) return [
    { name: m.from, ll: m.fromll, label: 'A' },
    { name: m.to,   ll: m.toll,   label: 'B' }
  ].filter(p => p.ll);
  return m.ll ? [{ name: m.center, ll: m.ll, label: '◆' }] : [];
}

/* ---------------- itinerary ---------------- */
function renderItinerary() {
  const v = $('#view-itinerary');
  v.innerHTML = '';
  let leg = null;
  TRIP.forEach(d => {
    const L = legOf(d.n);
    if (L !== leg) { leg = L; v.append(el(`<div class="leg"><span>${L}</span></div>`)); }
    v.append(el(`
      <button class="day" data-go="#/day/${d.n}">
        <div class="thumb"><span class="num">${d.n}</span><img data-q="${d.hero}" alt=""></div>
        <div class="body">
          <div class="when">${fmtDate(d.date)} · ${d.region}</div>
          <h3>${d.title}</h3>
          <p>${d.summary}</p>
          <div class="segcount">${d.segments.length} section${d.segments.length > 1 ? 's' : ''}</div>
        </div>
      </button>`));
  });
  Photos.watch(v);
}

function renderDay(n) {
  const d = TRIP.find(x => x.n === +n);
  const v = $('#view-itinerary');
  if (!d) { v.innerHTML = '<p class="empty">No such day.</p>'; return; }

  v.innerHTML = `
    <button class="back" data-go="#/">← All days</button>
    <div class="hero">
      <img data-q="${d.hero}" alt="">
      <div class="cap"><div class="when">Day ${d.n} · ${fmtDate(d.date)}</div><h2>${d.title}</h2></div>
    </div>
    <p class="lede">${d.summary}</p>
    <div class="facts">
      ${d.drive ? `<dl class="fact"><dt>Drive</dt><dd>${d.drive}</dd></dl>` : ''}
      ${d.stay ? `<dl class="fact"><dt>Sleep</dt><dd>${d.stay.link
        ? `<a href="${d.stay.link}" target="_blank" rel="noopener">${d.stay.name} ↗</a>`
        : d.stay.name}${d.stay.meta ? `<small>${d.stay.meta}</small>` : ''}</dd></dl>` : ''}
    </div>
    <div class="h-sec">The day on a map</div>
    <div class="mapbox" id="daymap"></div>
    <div class="h-sec">Sections</div>
    <div id="daysegs"></div>`;

  const box = v.querySelector('#daysegs');
  d.segments.forEach((s, i) => {
    const shots = (s.stops || []).slice(0, 4)
      .map(st => `<i data-q="${st.q}"></i>`).join('');
    box.append(el(`
      <button class="seg" data-go="#/section/${s.id}">
        <div class="badge">${i + 1}</div>
        <div>
          ${s.time ? `<div class="meta">${s.time}</div>` : ''}
          <h4>${s.name.replace(/^Segment\s*\d+\s*[—-]\s*/, '')}</h4>
          ${s.blurb ? `<p>${s.blurb}</p>` : ''}
          <div class="strip">${shots}</div>
        </div>
      </button>`));
  });
  mountMap('daymap',
    d.segments.flatMap((sg, i) => segPoints(sg).map(p => ({ ...p, label: i + 1 }))),
    { line: true });
  Photos.watch(v);
  window.scrollTo(0, 0);
}

/* ---------------- sections ---------------- */
let dayFilter = 'all';

function renderSections() {
  const v = $('#view-sections');
  const segs = allSegments().filter(s => dayFilter === 'all' || s.day.n === +dayFilter);
  v.innerHTML = `
    <div class="filters">
      <button data-f="all" aria-pressed="${dayFilter === 'all'}">All days</button>
      ${TRIP.map(d => `<button data-f="${d.n}" aria-pressed="${dayFilter == d.n}">Day ${d.n}</button>`).join('')}
    </div>
    <div id="seglist"></div>`;

  const box = v.querySelector('#seglist');
  if (!segs.length) box.innerHTML = '<p class="empty">Nothing here yet.</p>';
  segs.forEach(s => {
    const shots = (s.stops || []).slice(0, 4).map(st => `<i data-q="${st.q}"></i>`).join('');
    box.append(el(`
      <button class="seg" data-go="#/section/${s.id}">
        <div class="badge">${s.day.n}</div>
        <div>
          <div class="meta">Day ${s.day.n} · ${fmtDate(s.day.date)}${s.time ? ' · ' + s.time : ''}</div>
          <h4>${s.name.replace(/^Segment\s*\d+\s*[—-]\s*/, '')}</h4>
          ${s.blurb ? `<p>${s.blurb}</p>` : ''}
          <div class="strip">${shots}</div>
        </div>
      </button>`));
  });

  v.querySelectorAll('.filters button').forEach(b =>
    b.onclick = () => { dayFilter = b.dataset.f; renderSections(); });
  Photos.watch(v);
}

function renderSection(id) {
  const s = findSeg(id);
  const v = $('#view-sections');
  if (!s) { v.innerHTML = '<p class="empty">No such section.</p>'; return; }

  v.innerHTML = `
    <button class="back" data-go="#/sections">← All sections</button>
    <div class="when" style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--rust)">
      Day ${s.day.n} · ${fmtDate(s.day.date)}${s.time ? ' · ' + s.time : ''}
    </div>
    <h2 style="font-family:var(--serif);font-weight:400;font-size:clamp(26px,7vw,36px);line-height:1.08;margin:6px 0 8px">
      ${s.name.replace(/^Segment\s*\d+\s*[—-]\s*/, '')}
    </h2>
    ${s.blurb ? `<p class="lede">${s.blurb}</p>` : ''}
    <div class="gallery">
      ${(() => {
        const seen = {};
        return (s.stops || []).map(st => {
          const nth = seen[st.q] = (seen[st.q] ?? -1) + 1;
          return `<figure class="pola">
          <div class="frame"><img data-q="${st.q}" data-nth="${nth}" alt=""></div>
          <figcaption>${st.name}</figcaption>
        </figure>`;
        }).join('');
      })()}
    </div>
    <p class="credit">Photos from Wikimedia Commons — indicative, not ours.</p>
    <div class="h-sec">How close it all is</div>
    <div class="mapbox" id="segmap"></div>
    <a class="maplink" href="${mapHref(s.map)}" target="_blank" rel="noopener">${s.map?.from ? 'Open the route in Google Maps' : 'Open in Google Maps'} ↗</a>
    <div class="h-sec">Stops</div>
    <ul class="stops">
      ${(s.stops || []).map(st => `
        <li>
          <div class="pin">◆</div>
          <div>
            <b>${st.name}</b>
            ${st.note ? `<span>${st.note}</span>` : ''}
            <a href="https://www.google.com/maps/search/?api=1&query=${enc(st.name + ' ' + (s.day.region || ''))}" target="_blank" rel="noopener">Map ↗</a>
          </div>
        </li>`).join('')}
    </ul>
    <button class="back" data-go="#/day/${s.day.n}">← Back to Day ${s.day.n}</button>`;

  mountMap('segmap', segPoints(s), { line: !!s.map?.from });
  Photos.watch(v);
  window.scrollTo(0, 0);
}

/* ---------------- router ---------------- */
function show(tab) {
  document.querySelectorAll('.view').forEach(x => x.classList.remove('on'));
  $('#view-' + tab).classList.add('on');
  document.querySelectorAll('.tabs button').forEach(b =>
    b.setAttribute('aria-current', b.dataset.tab === tab));
}

function route() {
  const h = location.hash.slice(2) || '';
  const [what, arg] = h.split('/');
  if (what === 'day')          { show('itinerary'); renderDay(arg); }
  else if (what === 'section') { show('sections');  renderSection(arg); }
  else if (what === 'sections'){ show('sections');  renderSections(); }
  else if (what === 'photos')  { show('photos'); }
  else                         { show('itinerary'); renderItinerary(); }
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-go]');
  if (t) { location.hash = t.dataset.go; return; }
  const tab = e.target.closest('.tabs button');
  if (tab) location.hash = tab.dataset.tab === 'itinerary' ? '#/' : '#/' + tab.dataset.tab;
});
window.addEventListener('hashchange', route);
route();
