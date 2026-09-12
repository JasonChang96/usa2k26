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
node scripts/geocode.mjs         # look up any new place names (cached in data/geo.json)
node scripts/merge-research.mjs  # fold data/research/*.json into the day files
node scripts/build.mjs           # regenerate js/data.js
```

`build.mjs` also validates the data and prints anything missing.

## Where things come from

- **Photos** — searched live from Wikimedia Commons by the `q` phrase on each stop.
  Nothing is stored in this repo. They are indicative reference shots, not ours.
- **Maps** — Leaflet with CARTO basemap tiles. Coordinates come from OpenStreetMap's
  Nominatim geocoder at build time.
- **Photo upload** — a Google Apps Script web app receives the files and writes them
  into the shared Drive folder. See `docs/drive-setup.md`.
- **Park alerts** — live from the National Park Service API for Grand Teton, Yellowstone,
  Glacier and Mount Rainier. Closures and warnings appear both in the header panel and on
  the day pages for the parks that day touches. Each alert is scored for relevance:
  anything about roads and access, anything about weather or fire, and anything naming a
  stop that is actually in `data/*.json` is surfaced; campgrounds, permits, fishing and
  wildlife notices are folded into a collapsed "other notices" list. Tune the weights in
  `score()` in `js/alerts.js`. It uses NPS's shared
  `DEMO_KEY`, cached three hours per browser. If that ever rate-limits, get a free key at
  <https://www.nps.gov/subjects/developer/get-started.htm> and run this in the console:
  `localStorage.setItem('usa2k26.npskey','YOUR_KEY')`
