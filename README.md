# USA 2K26

Trip app for Jason & Alicia — Salt Lake City to Vancouver, 25 Sep – 10 Oct 2026.

Three tabs: **Itinerary** (16 days), **Sections** (each day broken into segments with
photos and a zoomed map), **Photos** (upload straight to Google Drive).

## Running it

```
python3 -m http.server 8899      # then open http://localhost:8899
```

No build tooling, no framework, no API keys in the repo.

## Editing the trip

Each day is one file in `data/dayNN.json` — see `docs/SCHEMA.md`. After editing:

```
node scripts/geocode.mjs   # look up any new place names (cached in data/geo.json)
node scripts/build.mjs     # regenerate js/data.js
```

`build.mjs` also validates the data and prints anything missing.

## Where things come from

- **Photos** — searched live from Wikimedia Commons by the `q` phrase on each stop.
  Nothing is stored in this repo. They are indicative reference shots, not ours.
- **Maps** — Leaflet with CARTO basemap tiles. Coordinates come from OpenStreetMap's
  Nominatim geocoder at build time.
- **Google Drive upload** — see `docs/drive-setup.md`. The OAuth client ID lives in
  the browser's localStorage, never in this repo.
