/* Geocode via Photon (OSM-backed, no key). Two passes:
   1. segment anchors ("Whistler, BC") — unambiguous by construction
   2. stops, biased toward their segment's anchor, so "Lost Lake" resolves to the
      one beside the segment rather than an identically named lake 400km away.
   Cached in data/geo.json. HTTP failures are never cached, so a run can resume. */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cacheFile = join(root, 'data', 'geo.json');
const geo = existsSync(cacheFile) ? JSON.parse(readFileSync(cacheFile, 'utf8')) : {};
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function lookup(q, near) {
  const key = near ? `${q}@${near[0].toFixed(1)},${near[1].toFixed(1)}` : q;
  if (key in geo) return geo[key];
  const p = { q, limit: '1', lang: 'en' };
  if (near) { p.lat = String(near[0]); p.lon = String(near[1]); }
  const url = 'https://photon.komoot.io/api/?' + new URLSearchParams(p);
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'usa2k26-trip-planner/1.0' } });
      if (r.status === 429 || r.status >= 500) { await sleep(4000 * (attempt + 1)); continue; }
      if (!r.ok) break;
      const c = (await r.json()).features?.[0]?.geometry?.coordinates;
      geo[key] = c ? [+c[1].toFixed(5), +c[0].toFixed(5)] : null;   // Photon gives [lon, lat]
      writeFileSync(cacheFile, JSON.stringify(geo));
      await sleep(320);
      return geo[key];
    } catch { await sleep(2000); }
  }
  return undefined;
}

const days = readdirSync(join(root, 'data'))
  .filter(f => /^day\d\d\.json$/.test(f)).sort()
  .map(f => JSON.parse(readFileSync(join(root, 'data', f), 'utf8')));

/* pass 1 — anchors */
console.log('pass 1: segment anchors');
for (const d of days) for (const s of d.segments) {
  for (const a of [s.map?.center, s.map?.from, s.map?.to].filter(Boolean)) await lookup(a);
}

/* pass 2 — stops, biased to their anchor */
let hit = 0, n = 0;
const unfound = [];
const total = days.reduce((t, d) => t + d.segments.reduce((u, s) => u + s.stops.length, 0), 0);
console.log(`pass 2: ${total} stops`);
for (const d of days) for (const s of d.segments) {
  const near = [s.map?.center, s.map?.from, s.map?.to].map(a => a && geo[a]).find(Boolean);
  for (const st of s.stops) {
    let found = null;
    for (const c of [`${st.name}, ${d.region}`, st.name, `${st.q}, ${d.region}`]) {
      const r = await lookup(c, near);
      if (r) { found = r; break; }
    }
    found ? hit++ : unfound.push(`${st.name} (day ${d.n})`);
    if (++n % 25 === 0) console.log(`  ${n}/${total} — ${hit} placed`);
  }
}
console.log(`\n${hit} placed, ${unfound.length} not found`);
unfound.forEach(u => console.log('  miss: ' + u));
