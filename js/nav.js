/* Side drawer for jumping between days, and a cat that takes you back to the top. */
(() => {
  const wrap = document.querySelector('.wrap');

  const legName = n =>
    n <= 3 ? 'Utah & the Tetons' :
    n <= 6 ? 'Yellowstone & Glacier' :
    n <= 10 ? 'West to the coast' : 'Seattle & Vancouver';

  let leg = null;
  const rows = TRIP.map(d => {
    const head = legName(d.n) !== leg ? `<li class="jl">${leg = legName(d.n)}</li>` : '';
    const when = new Date(d.date + 'T12:00:00')
      .toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    return `${head}<li><a href="#/day/${d.n}"><b>${d.n}</b>
      <span><em>${d.title}</em><small>${when} · ${d.region}</small></span></a></li>`;
  }).join('');

  document.body.insertAdjacentHTML('beforeend', `
    <button class="jumptab" id="jumptab" aria-label="Jump to a day">Days</button>
    <div class="scrim" id="scrim" hidden></div>
    <nav class="drawer" id="drawer" hidden aria-label="Jump to a day">
      <div class="dhead">
        <span>Jump to</span>
        <button class="dclose" id="dclose" aria-label="Close">✕</button>
      </div>
      <ul class="jump">${rows}</ul>
      <div class="dfoot">
        <a href="#/">Itinerary</a><a href="#/sections">Sections</a>
        <a href="#/packing">Packing</a><a href="#/photos">Photos</a>
      </div>
    </nav>
    <button class="totop" id="totop" aria-label="Back to top">
      <svg class="cat grey"><use href="#cat-face"/></svg>
    </button>`);

  const drawer = document.getElementById('drawer');
  const scrim  = document.getElementById('scrim');
  const totop  = document.getElementById('totop');

  const open = on => {
    drawer.hidden = scrim.hidden = !on;
    requestAnimationFrame(() => document.body.classList.toggle('drawer-open', on));
  };
  document.getElementById('jumptab').onclick = () => open(true);
  document.getElementById('dclose').onclick  = () => open(false);
  scrim.onclick = () => open(false);
  drawer.addEventListener('click', e => { if (e.target.closest('a')) open(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') open(false); });

  totop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      totop.classList.toggle('show', scrollY > 600);
      ticking = false;
    });
  }, { passive: true });
})();
