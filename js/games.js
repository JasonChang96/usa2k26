/* Car games. Gallery of cards, then each game is actually playable in here. */
const Games = (() => {
  const DRIVER = {
    yes:        ['Driver can play', 'd-yes'],
    call:       ['Driver can call out', 'd-call'],
    passengers: ['Passengers only', 'd-no']
  };
  const ART = {
    contact: ['💬', 'g-contact'], bingo: ['🎯', 'g-bingo'],
    frenchtoast: ['🍞', 'g-toast'], wouldyourather: ['🤔', 'g-wyr']
  };
  const esc = s => String(s ?? '').replace(/[<>&"]/g, c =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => { const c = [...a]; for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };
  const find = id => (GAMES?.games || []).find(g => g.id === id);
  const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
  const keep = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

  /* ---------- gallery ---------- */
  function gallery() {
    const v = document.getElementById('view-games');
    if (!GAMES?.games) { v.innerHTML = '<p class="empty">Games not built yet.</p>'; return; }
    v.innerHTML = `
      <div class="h-sec" style="margin-top:8px">Pick a game</div>
      <div class="ggrid">
        ${GAMES.games.map(g => {
          const [icon, cls] = ART[g.id] || ['🎲', ''];
          const [dtext, dcls] = DRIVER[g.driver] || DRIVER.passengers;
          return `<button class="gcard ${cls}" data-go="#/games/${g.id}">
            <span class="gicon">${icon}</span>
            <h3>${esc(g.name)}</h3>
            <p>${esc(g.blurb)}</p>
            <div class="gmeta">
              <span class="gplayers">${esc(g.players)} players</span>
              <span class="gdriver ${dcls}">${dtext}</span>
            </div>
          </button>`;
        }).join('')}
      </div>`;
  }

  /* ---------- one game ---------- */
  function play(id) {
    const g = find(id);
    const v = document.getElementById('view-games');
    if (!g) { v.innerHTML = '<p class="empty">No such game.</p>'; return; }
    const [icon, cls] = ART[g.id] || ['🎲', ''];
    const [dtext, dcls] = DRIVER[g.driver] || DRIVER.passengers;

    v.innerHTML = `
      <button class="back" data-go="#/games">← All games</button>
      <div class="gplay ${cls}">
        <header>
          <span class="gicon big">${icon}</span>
          <h2>${esc(g.name)}</h2>
          <div class="gmeta">
            <span class="gplayers">${esc(g.players)} players</span>
            <span class="gdriver ${dcls}">${dtext}</span>
          </div>
        </header>
        <details class="grules"><summary>How to play</summary>
          <ol>${g.how.map(h => `<li>${esc(h)}</li>`).join('')}</ol>
        </details>
        <div id="gstage"></div>
      </div>`;

    ({ bingo, contact, frenchtoast, wouldyourather }[id] || (() => {}))(g);
    window.scrollTo(0, 0);
  }

  /* ---------- bingo ---------- */
  function bingo(g) {
    const N = 16;
    const stage = document.getElementById('gstage');
    let card = load('g.bingo.card', null);
    let marks = load('g.bingo.marks', []);
    if (!card || card.length !== N) { card = shuffle(g.content.squares).slice(0, N); marks = []; keep('g.bingo.card', card); keep('g.bingo.marks', marks); }

    const lines = [];
    for (let r = 0; r < 4; r++) lines.push([0, 1, 2, 3].map(c => r * 4 + c));
    for (let c = 0; c < 4; c++) lines.push([0, 1, 2, 3].map(r => r * 4 + c));
    lines.push([0, 5, 10, 15], [3, 6, 9, 12]);

    const draw = () => {
      const won = lines.filter(l => l.every(i => marks.includes(i)));
      stage.innerHTML = `
        ${won.length ? `<div class="gwin">BINGO — ${won.length} line${won.length > 1 ? 's' : ''}!</div>` : ''}
        <div class="bcard">
          ${card.map((s, i) => `<button class="bsq ${marks.includes(i) ? 'hit' : ''}" data-i="${i}">${esc(s)}</button>`).join('')}
        </div>
        <div class="growbtn">
          <button class="btn ghost" id="bnew">New card</button>
          <button class="btn ghost" id="bclear">Clear marks</button>
        </div>`;
      stage.querySelectorAll('.bsq').forEach(b => b.onclick = () => {
        const i = +b.dataset.i;
        marks = marks.includes(i) ? marks.filter(x => x !== i) : [...marks, i];
        keep('g.bingo.marks', marks); draw();
      });
      document.getElementById('bnew').onclick = () => {
        card = shuffle(g.content.squares).slice(0, N); marks = [];
        keep('g.bingo.card', card); keep('g.bingo.marks', marks); draw();
      };
      document.getElementById('bclear').onclick = () => { marks = []; keep('g.bingo.marks', marks); draw(); };
    };
    draw();
  }

  /* ---------- contact ---------- */
  function contact(g) {
    const stage = document.getElementById('gstage');
    let word = null, shown = 1, peek = false;

    const draw = () => {
      stage.innerHTML = !word
        ? `<div class="gsecret empty">
             <p>One of you is the Wordmaster. Tap to get a secret word — keep it to yourself.</p>
             <button class="btn" id="gdraw">Draw a secret word</button>
           </div>`
        : `<div class="gsecret">
             <div class="glabel">Wordmaster only</div>
             <div class="gword ${peek ? '' : 'hidden'}" id="gpeek">${esc(word)}</div>
             <button class="gpeekbtn" id="gtoggle">${peek ? 'Hide it' : 'Tap to peek'}</button>
             <div class="glabel">Everyone can see</div>
             <div class="greveal">${word.split('').map((c, i) =>
               `<span class="gch ${i < shown ? 'on' : ''}">${i < shown ? esc(c) : '·'}</span>`).join('')}</div>
             <div class="growbtn">
               <button class="btn ghost" id="gnext" ${shown >= word.length ? 'disabled' : ''}>Reveal next letter</button>
               <button class="btn ghost" id="gnew">New word</button>
             </div>
             ${shown >= word.length ? '<div class="gwin">Guessers got the whole word!</div>' : ''}
           </div>`;
      const d = document.getElementById('gdraw');
      if (d) d.onclick = () => { word = pick(g.content.words).toUpperCase(); shown = 1; peek = false; draw(); };
      const t = document.getElementById('gtoggle');
      if (t) t.onclick = () => { peek = !peek; draw(); };
      const n = document.getElementById('gnext');
      if (n) n.onclick = () => { shown = Math.min(shown + 1, word.length); draw(); };
      const nw = document.getElementById('gnew');
      if (nw) nw.onclick = () => { word = pick(g.content.words).toUpperCase(); shown = 1; peek = false; draw(); };
    };
    draw();
  }

  /* ---------- french toast ---------- */
  function frenchtoast(g) {
    const stage = document.getElementById('gstage');
    let secret = null, peek = false;
    const draw = () => {
      stage.innerHTML = !secret
        ? `<div class="gsecret empty">
             <p>One of you thinks of the item. Tap for one, or make up your own.</p>
             <button class="btn" id="gdraw">Give me a secret item</button>
           </div>`
        : `<div class="gsecret">
             <div class="glabel">Only you should see this</div>
             <div class="gword ${peek ? '' : 'hidden'}">${esc(secret)}</div>
             <button class="gpeekbtn" id="gtoggle">${peek ? 'Hide it' : 'Tap to peek'}</button>
             <p class="ghint">Everyone else asks: “Is it more like ___ or French toast?”</p>
             <button class="btn ghost" id="gnew">Another item</button>
           </div>`;
      const d = document.getElementById('gdraw');
      if (d) d.onclick = () => { secret = pick(g.content.secrets); peek = true; draw(); };
      const t = document.getElementById('gtoggle');
      if (t) t.onclick = () => { peek = !peek; draw(); };
      const n = document.getElementById('gnew');
      if (n) n.onclick = () => { secret = pick(g.content.secrets); peek = true; draw(); };
    };
    draw();
  }

  /* ---------- would you rather ---------- */
  function wouldyourather(g) {
    const stage = document.getElementById('gstage');
    const mine = () => load('g.wyr.mine', []);
    let deck = shuffle([...g.content.prompts, ...mine()]);
    let i = 0, adding = false;

    const draw = () => {
      const p = deck[i % deck.length];
      stage.innerHTML = `
        <div class="wyr">
          <div class="wopt"><span class="wtag">Would you rather</span><p>${esc(p.a)}</p></div>
          <div class="wor">or</div>
          <div class="wopt"><span class="wtag">or</span><p>${esc(p.b)}</p></div>
        </div>
        <div class="growbtn">
          <button class="btn" id="wnext">Next one</button>
          <button class="btn ghost" id="wadd">${adding ? 'Cancel' : 'Add your own'}</button>
        </div>
        ${adding ? `
          <div class="waddbox">
            <input id="wa" placeholder="Would you rather…" aria-label="First option">
            <input id="wb" placeholder="…or…" aria-label="Second option">
            <button class="btn ghost" id="wsave">Add to the deck</button>
          </div>` : ''}
        <div class="gcount">${deck.length} in the deck${mine().length ? ` · ${mine().length} yours` : ''}</div>`;
      document.getElementById('wnext').onclick = () => { i++; if (i % deck.length === 0) deck = shuffle(deck); draw(); };
      document.getElementById('wadd').onclick = () => { adding = !adding; draw(); };
      const save = document.getElementById('wsave');
      if (save) save.onclick = () => {
        const a = document.getElementById('wa').value.trim();
        const b = document.getElementById('wb').value.trim();
        if (!a || !b) return;
        const list = [...mine(), { a, b }];
        keep('g.wyr.mine', list);
        deck = shuffle([...g.content.prompts, ...list]);
        i = deck.findIndex(x => x.a === a && x.b === b);
        adding = false; draw();
      };
    };
    draw();
  }

  return { gallery, play };
})();
