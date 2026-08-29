/* Autumn leaves drifting down behind the page, plus a few pressed into the corners. */
(() => {
  const SHAPES = {
    maple: 'M12 1.6c1.3 2.5 2.8 3.5 4.6 3.3-.4 1.7-.2 2.8.9 3.6-1.1.9-1.4 2-1 3.4 1.7-.3 3 .3 3.9 1.6-1.6 1.2-2.3 2.4-2.1 3.9-2-.6-3.6-.2-4.9 1l.7 4.2h-2.2l.7-4.2c-1.3-1.2-2.9-1.6-4.9-1 .2-1.5-.5-2.7-2.1-3.9.9-1.3 2.2-1.9 3.9-1.6-.4-1.4-.1-2.5 1-3.4-1.1-.8-1.3-1.9-.9-3.6 1.8.2 3.3-.8 4.4-3.3z',
    oak:   'M12 2c3 2 4.5 4 4 6 2-.6 3.4.2 3.6 1.8-1 1-2 1.3-3 1 1.4 1.2 1.7 2.6.8 4-1.2.4-2.3 0-3.3-1 .3 1.7-.3 3-1.6 4-1.6.3-2.6-.5-3-2.3-1 .8-2 1-3 .4-.7-1.3-.4-2.5 1-3.6-1.2-.2-2-.9-2.5-2 .5-1.5 1.7-2.1 3.6-1.8-.6-2.2.8-4.3 3.4-6.5z',
    plain: 'M12 2c6 5 8 12 0 20-8-8-6-15 0-20z'
  };
  const COLOURS = ['#B0552F', '#C9803A', '#D9A24A', '#9A6B33', '#8A7B3B'];
  const KINDS = Object.keys(SHAPES);

  const svg = (kind, cls, style) =>
    `<svg class="leaf ${cls}" viewBox="0 0 24 24" style="${style}" aria-hidden="true">
       <path d="${SHAPES[kind]}" fill="currentColor"/>
       ${kind === 'plain' ? '<path d="M12 3v18" stroke="rgba(0,0,0,.16)" stroke-width="1"/>' : ''}
     </svg>`;

  const rand = (a, b) => a + Math.random() * (b - a);

  /* Few enough to stay cheap on a phone, enough to read as weather. */
  const drifting = Array.from({ length: 9 }, (_, i) => svg(
    KINDS[i % KINDS.length], '',
    `left:${rand(2, 94).toFixed(1)}%;` +
    `--sz:${rand(13, 27).toFixed(0)}px;` +
    `--col:${COLOURS[i % COLOURS.length]};` +
    `--op:${rand(.3, .55).toFixed(2)};` +
    `--dur:${rand(26, 58).toFixed(0)}s;` +
    `--delay:-${rand(0, 40).toFixed(0)}s;` +
    `--sway:${rand(-70, 70).toFixed(0)}px;`
  )).join('');

  /* Pressed into the corners, the way a leaf ends up in a real scrapbook. */
  const corners = [
    ['left:1.5%;top:6%;--sz:44px;transform:rotate(-24deg)', 'maple', '#B0552F'],
    ['right:2%;top:22%;--sz:36px;transform:rotate(38deg)',  'oak',   '#9A6B33'],
    ['left:3%;bottom:12%;--sz:38px;transform:rotate(16deg)', 'plain', '#C9803A'],
    ['right:3%;bottom:6%;--sz:42px;transform:rotate(-42deg)','maple', '#8A7B3B']
  ].map(([pos, kind, col]) => svg(kind, 'pressed', `${pos};--col:${col}`)).join('');

  document.body.insertAdjacentHTML('afterbegin',
    `<div class="leaves" aria-hidden="true">${drifting}${corners}</div>`);
})();
