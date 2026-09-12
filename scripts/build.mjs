/* data/dayNN.json (+ geo.json) -> js/data.js, with validation. */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = readdirSync(join(root, 'data')).filter(f => /^day\d\d\.json$/.test(f)).sort();
let geo = {};
try { geo = JSON.parse(readFileSync(join(root, 'data', 'geo.json'), 'utf8')); } catch {}

const km = ([a, b], [c, e]) => {
  const R = 6371, r = Math.PI / 180;
  const x = Math.sin((c - a) * r / 2) ** 2 +
    Math.cos(a * r) * Math.cos(c * r) * Math.sin((e - b) * r / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};
const median = xs => {
  const a = [...xs].sort((x, y) => x - y);
  return a.length % 2 ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
};
const biased = (q, near) => near ? `${q}@${near[0].toFixed(1)},${near[1].toFixed(1)}` : q;

const days = [], problems = [], outliers = [], unplaced = [];
let located = 0;

for (const f of files) {
  let d;
  try { d = JSON.parse(readFileSync(join(root, 'data', f), 'utf8')); }
  catch (e) { problems.push(`${f}: invalid JSON — ${e.message}`); continue; }

  for (const k of ['n', 'date', 'title', 'region', 'hero', 'summary', 'segments'])
    if (d[k] === undefined) problems.push(`${f}: missing "${k}"`);
  if (!Array.isArray(d.segments) || !d.segments.length) problems.push(`${f}: no segments`);

  for (const s of d.segments || []) {
    if (!s.id) problems.push(`${f}: segment without id`);
    if (!s.map) { problems.push(`${f}/${s.id}: no map`); s.map = {}; }
    else if (!s.map.center && !(s.map.from && s.map.to))
      problems.push(`${f}/${s.id}: map needs center or from+to`);
    if (!s.stops?.length) problems.push(`${f}/${s.id}: no stops`);

    if (s.map.center) s.map.ll = geo[s.map.center] || null;
    if (s.map.from) { s.map.fromll = geo[s.map.from] || null; s.map.toll = geo[s.map.to] || null; }
    const anchor = s.map.ll || s.map.fromll || null;


    for (const st of s.stops || []) {
      if (!st.q) problems.push(`${f}/${s.id}: stop "${st.name}" has no q`);
      /* The trail badge is one line on a phone. Two options crammed into one
         field renders as a paragraph, so the second one belongs in `note`. */
      for (const k of ['dist', 'time', 'gain'])
        if ((st.trail?.[k] || '').length > 34)
          problems.push(`${f}/${s.id}: "${st.name}" trail.${k} too long for the badge — split it`);
      if (st.trail && !st.trail.dist)
        problems.push(`${f}/${s.id}: "${st.name}" has a trail with no distance`);
      const names = [`${st.name}, ${d.region}`, st.name, `${st.q}, ${d.region}`];
      const ll = [...names.map(q => biased(q, anchor)), ...names].map(k => geo[k]).find(Boolean);
      if (ll) { st.ll = ll; located++; }
      else unplaced.push(`${st.name} (day ${d.n})`);
    }

    /* A place name that also exists 400km away will geocode to the wrong one and
       wreck the map bounds. Drop pins that sit far from the segment's own centre of
       mass — measured against the median, so a couple of bad ones cannot skew it. */
    const pts = (s.stops || []).filter(st => st.ll);
    if (pts.length > 2) {
      const mid = [0, 1].map(i => median(pts.map(st => st.ll[i])));
      const ds = pts.map(st => km(mid, st.ll));
      /* A route segment legitimately spans its whole from->to distance. */
      const span = s.map.fromll && s.map.toll ? km(s.map.fromll, s.map.toll) * 1.6 : 0;
      const limit = Math.max(80, 4 * median(ds), span);
      pts.forEach((st, i) => {
        if (ds[i] > limit) {
          outliers.push(`${st.name} (day ${d.n}) — ${Math.round(ds[i])}km adrift, pin dropped`);
          delete st.ll;
          located--;
        }
      });
    }
  }
  days.push(d);
}

days.sort((a, b) => a.n - b.n);
const ids = days.flatMap(d => d.segments.map(s => s.id));
if (new Set(ids).size !== ids.length) problems.push('duplicate segment ids');

let games = null;
try { games = JSON.parse(readFileSync(join(root, 'data', 'games.json'), 'utf8')); }
catch { problems.push('games.json missing or invalid — the Games tab will be empty'); }

let packing = null;
try { packing = JSON.parse(readFileSync(join(root, 'data', 'packing.json'), 'utf8')); }
catch { problems.push('packing.json missing or invalid — the Packing tab will be empty'); }

writeFileSync(join(root, 'js', 'data.js'),
  'const TRIP = ' + JSON.stringify(days, null, 1) + ';\n' +
  'const PACKING = ' + JSON.stringify(packing) + ';\n' +
  'const GAMES = ' + JSON.stringify(games) + ';\n');

const stamp = Date.now().toString(36);
const html = join(root, 'index.html');
writeFileSync(html, readFileSync(html, 'utf8').replace(/\?v=[a-z0-9]+/g, '?v=' + stamp));

const stops = days.reduce((n, d) => n + d.segments.reduce((m, s) => m + s.stops.length, 0), 0);
console.log(`${days.length} days · ${ids.length} sections · ${stops} stops · ${located} located`);
if (unplaced.length) { console.log(`\nNO COORDINATES (${unplaced.length}):`); unplaced.forEach(u => console.log('  - ' + u)); }
if (outliers.length) { console.log(`\nDROPPED AS MISPLACED (${outliers.length}):`); outliers.forEach(o => console.log('  - ' + o)); }
if (problems.length) { console.log('\nPROBLEMS:'); problems.forEach(p => console.log('  - ' + p)); }
