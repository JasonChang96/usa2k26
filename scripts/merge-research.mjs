/* data/research/*.json -> folded into data/dayNN.json. Re-runnable: research is the
   source of truth for the fields it owns, so a second run overwrites cleanly. */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'data', 'research');
if (!existsSync(dir)) { console.log('no research directory — nothing to merge'); process.exit(0); }

const SEG_FIELDS = ['expect', 'alt', 'seasonal', 'cost'];
const STOP_FIELDS = ['kind', 'trail'];

const patches = {};
for (const f of readdirSync(dir).filter(f => f.endsWith('.json'))) {
  let p;
  try { p = JSON.parse(readFileSync(join(dir, f), 'utf8')); }
  catch (e) { console.log(`SKIPPED ${f}: invalid JSON — ${e.message}`); continue; }
  for (const [id, body] of Object.entries(p)) {
    if (patches[id]) console.log(`NOTE: ${id} patched by two files, later wins`);
    patches[id] = { ...body, _src: f };
  }
}

const files = readdirSync(join(root, 'data')).filter(f => /^day\d\d\.json$/.test(f)).sort();
let segs = 0, stops = 0, trails = 0;
const missed = [], unknown = new Set(Object.keys(patches));

for (const f of files) {
  const path = join(root, 'data', f);
  const d = JSON.parse(readFileSync(path, 'utf8'));
  let touched = false;

  for (const s of d.segments || []) {
    const p = patches[s.id];
    if (!p) continue;
    unknown.delete(s.id);
    for (const k of SEG_FIELDS) if (p[k] !== undefined) { s[k] = p[k]; touched = true; }
    segs++;

    const byName = new Map((s.stops || []).map(st => [st.name, st]));
    for (const [name, body] of Object.entries(p.stops || {})) {
      const st = byName.get(name);
      if (!st) { missed.push(`${s.id}: no stop named "${name}" (${p._src})`); continue; }
      for (const k of STOP_FIELDS) if (body[k] !== undefined) { st[k] = body[k]; touched = true; }
      if (body.trail) trails++;
      stops++;
    }
  }
  if (touched) writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
}

console.log(`merged ${segs} segments · ${stops} stops · ${trails} trails`);
if (missed.length) { console.log(`\nSTOP NAME MISMATCHES (${missed.length}):`); missed.forEach(m => console.log('  - ' + m)); }
if (unknown.size) { console.log(`\nUNKNOWN SEGMENT IDS (${unknown.size}):`); [...unknown].forEach(u => console.log('  - ' + u)); }
