# data/games.json schema

```json
{
  "games": [
    {
      "id": "bingo",
      "name": "Road Trip Bingo",
      "players": "2–5",
      "driver": "passengers",
      "blurb": "Max 14 words. What it is.",
      "how": ["Rule line, max 20 words.", "..."],
      "content": { }
    }
  ]
}
```

- `driver` — exactly one of:
  - `"yes"`   the driver can fully play (spoken only, no looking, no hands)
  - `"call"`  the driver can join by calling out, but cannot hold or tap anything
  - `"passengers"` passengers only
- `players` — a human range like `"2–5"` or `"3+"`.
- `how` — 3 to 6 short lines. Second person. No numbering; the app numbers them.

## Per-game `content`

**bingo** — `{ "squares": [ "Bison", "Snow on a peak", ... ] }`
  60–80 entries. Every one must be genuinely plausible on THIS route
  (Utah, Wyoming, Montana, Idaho, Washington, British Columbia, late Sept–early Oct).
  Mix easy and hard. Short — 1 to 4 words, so they fit a small square.
  No duplicates, no near-duplicates.

**frenchtoast** — `{ "secrets": [ "Cupcake", "Lighthouse", ... ] }`
  100+ guessable everyday nouns. Concrete objects, animals, foods, places.
  Nothing abstract, nothing proper-noun, nothing that needs specialist knowledge.

**wouldyourather** — `{ "prompts": [ { "a": "...", "b": "..." }, ... ] }`
  70+ pairs. Both halves must be genuinely hard to choose between.
  Range from silly to genuinely thought-provoking. Some should be road-trip
  or travel flavoured. Keep each side under 18 words. Nothing cruel, nothing
  sexual, nothing that needs anyone to insult a real person present.

**contact** — `{ "words": [ "Bicycle", "Volcano", ... ] }`
  120+ common nouns for the Wordmaster to use. Guessable but not trivial.
  Spread across the alphabet — at least 3 starting with each common letter.
