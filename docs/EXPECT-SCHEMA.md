# "What to expect" + trail fields

Added to the existing day JSON. All fields OPTIONAL — omit rather than guess.

## On a segment

```json
"expect": {
  "arrive": "What it is actually like when you pull in. One sentence, max 22 words.",
  "parking": "How parking works and how full it gets. Max 16 words. Omit for city/transit segments.",
  "need": "1–2 hours",
  "paths": [
    { "opt": "Just the view", "do": "Overlook is 2 min from the car park.", "cost": "10 min" },
    { "opt": "Stretch the legs", "do": "Walk the lower boardwalk loop.", "cost": "40 min" }
  ]
}
```

- `paths` — 2 to 3 choose-your-own options, easiest first. This is the point of the
  feature: standing at the car park, which version of this stop are we doing?
- `cost` — wall-clock time for that option, car park to car park.

## On a stop

```json
"kind": "view | walk | hike | food | sight | drive",
"trail": {
  "dist": "2.5 km round trip",
  "time": "1h–1h 30m",
  "gain": "120 m",
  "from": "Jenny Lake boat dock",
  "grade": "easy | moderate | strenuous"
}
```

- `trail` — ONLY for stops you actually walk. Always ROUND TRIP, back to the car
  park (or boat dock) named in `from`.
- `dist` — metric first. Round trip, never one-way.
- `grade` — easy = flat/paved/boardwalk. moderate = real climb but no scrambling.
  strenuous = long or steep. Jason and Alicia are not doing strenuous.

## Accuracy rule

Every trail number must come from the managing agency (NPS, Parks Canada, BC Parks,
state park, city) or the operator's own site. If no official number exists, omit
`trail` entirely. Never estimate a distance from a photo or a blog.
