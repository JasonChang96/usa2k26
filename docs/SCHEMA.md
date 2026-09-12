# Day JSON schema — USA 2K26 trip app

One file per day: `data/dayNN.json` (zero-padded, e.g. `day02.json`).
Must be valid JSON. No comments, no trailing commas.

```json
{
  "n": 2,
  "date": "2026-09-26",
  "dow": "Sat",
  "title": "Bear Lake to the Tetons",
  "region": "Wyoming",
  "hero": "Grand Teton National Park autumn",
  "summary": "Early start over the pass, then the full Teton scenic drive at golden hour.",
  "drive": "Logan to Jackson · 4h 30m · 330 km",
  "stay": {
    "name": "Airbnb #2 — Jackson",
    "meta": "2 nights",
    "link": "https://www.airbnb.com/rooms/1410358581481167106"
  },
  "segments": [
    {
      "id": "d02s2",
      "name": "Segment 2 — Teton Park Road, Moose to Signal Mountain",
      "blurb": "The south half of the inner park road, turnout by turnout.",
      "time": "1:00–4:00pm",
      "map": { "from": "Moose, Wyoming", "to": "Signal Mountain Lodge, Wyoming" },
      "stops": [
        { "name": "Windy Point Turnout", "q": "Windy Point Turnout Grand Teton", "note": "First full Teton Range panorama." }
      ]
    }
  ]
}
```

## Field rules

- `hero` — a Wikimedia Commons SEARCH PHRASE, not a URL. Must be a real, well-photographed
  place name. The app searches Commons at runtime and shows the top image.
- `summary` — ONE sentence, max 22 words. Plain, concrete, no marketing language.
- `drive` — omit the key entirely on days with no driving.
- `stay.link` — omit the key if there is no link.
- `segments` — 2 to 4 per day. Geographic or thematic chunks, in the order they happen.
- `id` — `d<NN>s<index>`, e.g. `d02s2`.
- `name` — MUST start with `Segment N — ` where N restarts at 1 each day.
- `blurb` — max 14 words.
- `time` — rough clock window. Omit if genuinely unknown.
- `map` — EITHER `{"from": "...", "to": "..."}` for a drive/route segment,
  OR `{"center": "...", "zoom": 14}` for a walk-around-one-area segment.
  Zoom 12 = valley, 14 = neighbourhood, 16 = a few blocks.
  Place strings must be findable in Google Maps as typed.
- `stops` — 3 to 8 per segment. More than 8, pick the best and drop the rest.
  - `q` — Wikimedia Commons search phrase for THIS stop. Include the park/city name
    so the search disambiguates. If a stop is unlikely to have a Commons photo
    (a small cafe, a turnout), use the nearest famous landmark instead.
  - `note` — max 12 words, or omit. Say what it IS or why stop, not adjectives.

## Optional richer fields

A segment may also carry `expect`, `alt`, `seasonal` and `cost`, and a stop may carry
`kind` and `trail`. These drive the "What to expect", "Pick your version" and hidden
photo blocks on a section page. They are documented separately in `EXPECT-SCHEMA.md`
and are normally written by research into `data/research/*.json`, then folded in with
`node scripts/merge-research.mjs`. Editing them directly in `dayNN.json` works too, but
a later merge run overwrites those fields from the research file.
