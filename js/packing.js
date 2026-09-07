/* Two themed packing lists, tickable, remembered per browser. */
const Packing = (() => {
  const BAGS = {
    check: ['Hold bag', 'bg-check'],
    carry: ['Carry-on', 'bg-carry'],
    wear:  ['Wear it', 'bg-wear'],
    home:  ['Leave home', 'bg-home']
  };
  let who = localStorage.getItem('usa2k26.who') || 'man';

  const key = (w, s, i) => `pk:${w}:${s}:${i}`;
  const got = k => localStorage.getItem(k) === '1';
  const set = (k, v) => v ? localStorage.setItem(k, '1') : localStorage.removeItem(k);

  const counts = w => {
    const L = PACKING?.lists?.[w];
    if (!L) return [0, 0];
    let done = 0, total = 0;
    L.sections.forEach((s, si) => s.items.forEach((_, ii) => {
      total++; if (got(key(w, si, ii))) done++;
    }));
    return [done, total];
  };

  function render() {
    const v = document.getElementById('view-packing');
    if (!v) return;
    if (!PACKING?.lists) {
      v.innerHTML = '<p class="empty">Packing list not built yet.</p>';
      return;
    }
    const L = PACKING.lists[who];
    const [done, total] = counts(who);

    v.innerHTML = `
      <div class="brules">
        <div class="h-sec" style="margin-top:8px">What you are allowed to bring</div>
        ${(PACKING.rules || []).map(r => `
          <div class="brule">
            <span class="bleg">${r.leg}</span>
            <span class="ballow">${r.allow}</span>
            ${r.note ? `<span class="bnote">${r.note}</span>` : ''}
          </div>`).join('')}
      </div>

      <div class="whoswitch">
        <button data-who="man"   aria-pressed="${who === 'man'}">${PACKING.lists.man.title}</button>
        <button data-who="woman" aria-pressed="${who === 'woman'}">${PACKING.lists.woman.title}</button>
      </div>

      <div class="plist theme-${who}">
        <header class="phead">
          <h2>${L.title}</h2>
          <p>${L.tagline}</p>
          <div class="pbar"><i style="width:${total ? (done / total * 100).toFixed(1) : 0}%"></i></div>
          <div class="pcount">${done} of ${total} packed</div>
        </header>
        ${L.sections.map((s, si) => `
          <section class="psec">
            <h3><span class="pico">${s.icon || '•'}</span>${s.name}</h3>
            <ul>
              ${s.items.map((it, ii) => {
                const k = key(who, si, ii);
                return `<li class="${got(k) ? 'on' : ''}">
                  <label>
                    <input type="checkbox" data-k="${k}" ${got(k) ? 'checked' : ''}>
                    <span class="box"></span>
                    <span class="ptext">
                      <b>${it.t}</b>
                      ${it.n ? `<small>${it.n}</small>` : ''}
                    </span>
                    <span class="bag ${BAGS[it.bag]?.[1] || ''}">${BAGS[it.bag]?.[0] || ''}</span>
                  </label>
                </li>`;
              }).join('')}
            </ul>
          </section>`).join('')}
        <button class="btn ghost preset" id="pclear">Untick everything</button>
      </div>`;

    v.querySelectorAll('.whoswitch button').forEach(b =>
      b.onclick = () => { who = b.dataset.who; localStorage.setItem('usa2k26.who', who); render(); });
    v.querySelectorAll('input[type=checkbox]').forEach(cb =>
      cb.onchange = () => {
        set(cb.dataset.k, cb.checked);
        cb.closest('li').classList.toggle('on', cb.checked);
        const [d, t] = counts(who);
        v.querySelector('.pbar i').style.width = t ? (d / t * 100).toFixed(1) + '%' : 0;
        v.querySelector('.pcount').textContent = `${d} of ${t} packed`;
      });
    document.getElementById('pclear').onclick = () => {
      Object.keys(localStorage).filter(k => k.startsWith(`pk:${who}:`))
        .forEach(k => localStorage.removeItem(k));
      render();
    };
  }

  return { render };
})();
