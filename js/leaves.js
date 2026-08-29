/* Autumn leaves as flat icons — outlined, veined, bold colour. Drifting behind
   the page, plus a few pressed into the corners like a real scrapbook. */
(() => {
  /* Each leaf: a filled silhouette, then stem and veins drawn on top. */
  const LEAVES = {
    maple: {
      body: 'M16 2.2c1.7 3.3 3.7 4.6 6.1 4.4-.6 2.2-.3 3.7 1.2 4.7-1.5 1.2-1.9 2.7-1.3 4.5 2.2-.4 4 .4 5.2 2.1-2.1 1.6-3.1 3.2-2.8 5.2-2.6-.8-4.8-.3-6.5 1.3l.9 5.6h-2.9l.9-5.6c-1.7-1.6-3.9-2.1-6.5-1.3.3-2-.7-3.6-2.8-5.2 1.2-1.7 3-2.5 5.2-2.1.6-1.8.2-3.3-1.3-4.5 1.5-1 1.8-2.5 1.2-4.7 2.4.2 4.4-1.1 6.1-4.4z',
      lines: 'M16 28V12M16 17l-4.4-3.4M16 17l4.4-3.4M16 22l-3.2-2.4M16 22l3.2-2.4'
    },
    oak: {
      body: 'M16 2.4c2.9 2 4.3 3.9 4.2 5.8 1.9-.9 3.4-.4 4.4 1.4-1 1.3-2.2 1.9-3.6 1.8 1.7 1.3 2.2 2.8 1.4 4.5-1.6.3-3-.2-4.1-1.5.5 2-.2 3.6-2 4.7-1.5-.6-2.3-1.8-2.4-3.6l-.4 13.9h-1.4L11.7 15c-1.2 1.3-2.5 1.6-4 1-.7-1.7-.2-3.2 1.5-4.5-1.4.1-2.6-.5-3.6-1.8 1-1.8 2.5-2.3 4.4-1.4-.1-1.9 1.3-3.8 4.2-5.8z',
      lines: 'M16 28V6'
    },
    ginkgo: {
      body: 'M16 20.5c-7.3 0-12.2-4-10.4-9.4C7.2 6.3 11.2 4 16 4s8.8 2.3 10.4 7.1c1.8 5.4-3.1 9.4-10.4 9.4z',
      lines: 'M16 28v-8M16 20V5M16 19.6l-5.6-13M16 19.6l5.6-13M16 19.4l-8.6-9.6M16 19.4l8.6-9.6'
    },
    birch: {
      body: 'M16 2.6c7 5.6 9.8 12.4 0 22.4-9.8-10-7-16.8 0-22.4z',
      lines: 'M16 29V5M16 11l-4.6 2.6M16 11l4.6 2.6M16 16l-5.2 3M16 16l5.2 3M16 21l-3.6 2M16 21l3.6 2'
    }
  };

  /* Bolder autumn palette: [fill, outline] */
  const COLOURS = [
    ['#D6521F', '#8C2F0E'],   // scarlet maple
    ['#E8871E', '#9E4B0C'],   // burnt orange
    ['#F2B32C', '#A9720C'],   // gold
    ['#B23A18', '#75200A'],   // deep red
    ['#C98A21', '#8A5810'],   // ochre
    ['#8C9B2E', '#556015'],   // turning olive
    ['#E0632A', '#943510']    // pumpkin
  ];
  const KINDS = Object.keys(LEAVES);
  const rand = (a, b) => a + Math.random() * (b - a);

  const svg = (kind, cls, style, fill, line) => {
    const L = LEAVES[kind];
    return `<svg class="leaf ${cls}" viewBox="0 0 32 32" style="${style}" aria-hidden="true">
      <path d="${L.body}" fill="${fill}" stroke="${line}" stroke-width="1.6"
            stroke-linejoin="round"/>
      <path d="${L.lines}" fill="none" stroke="${line}" stroke-width="1.3"
            stroke-linecap="round" opacity=".72"/>
    </svg>`;
  };

  /* Enough to read as weather, few enough to stay cheap on a phone. */
  const drifting = Array.from({ length: 16 }, (_, i) => {
    const [fill, line] = COLOURS[i % COLOURS.length];
    return svg(KINDS[i % KINDS.length], '',
      `left:${rand(1, 95).toFixed(1)}%;` +
      `--sz:${rand(22, 46).toFixed(0)}px;` +
      `--op:${rand(.72, .96).toFixed(2)};` +
      `--dur:${rand(24, 56).toFixed(0)}s;` +
      `--delay:-${rand(0, 50).toFixed(0)}s;` +
      `--sway:${rand(-90, 90).toFixed(0)}px;` +
      /* Where it rests when motion is reduced, so it is still on the page. */
      `--top:${rand(2, 92).toFixed(0)}vh;`, fill, line);
  }).join('');

  const corners = [
    ['left:1.5%;top:5%;--sz:66px;transform:rotate(-24deg)',    'maple',  0],
    ['right:2%;top:20%;--sz:54px;transform:rotate(38deg)',     'oak',    5],
    ['left:2.5%;bottom:11%;--sz:58px;transform:rotate(16deg)', 'ginkgo', 2],
    ['right:3%;bottom:5%;--sz:60px;transform:rotate(-42deg)',  'birch',  3],
    ['left:6%;top:52%;--sz:44px;transform:rotate(72deg)',      'maple',  6]
  ].map(([pos, kind, c]) => svg(kind, 'pressed', pos, COLOURS[c][0], COLOURS[c][1])).join('');

  document.body.insertAdjacentHTML('afterbegin',
    `<div class="leaves" aria-hidden="true">${drifting}${corners}</div>`);
})();
