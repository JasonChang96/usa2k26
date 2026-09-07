# data/packing.json schema

```json
{
  "rules": [
    { "leg": "Singapore → Seattle",
      "allow": "2 checked pieces, 23kg each",
      "note": "Max 12 words. The practical consequence." }
  ],
  "lists": {
    "man":   { "title": "...", "tagline": "...", "sections": [ ... ] },
    "woman": { "title": "...", "tagline": "...", "sections": [ ... ] }
  }
}
```

A section:
```json
{ "name": "Loadout", "icon": "🔧",
  "items": [
    { "t": "Merino base layer ×2", "n": "Max 9 words, or omit.", "bag": "check" }
  ] }
```

- `bag` — one of `check` (the one hold bag), `carry` (cabin bag), `wear` (worn on
  travel days, so it costs no allowance), `home` (deliberately left behind).
- 5–7 sections per person, 5–9 items each. Every item must be a real thing a
  person packs — no filler, no jokes that cost luggage space.
- `n` is for a reason, a quantity, or a warning. Omit it when the item is obvious.
- `tagline` — max 12 words, in the voice of that list's theme.
