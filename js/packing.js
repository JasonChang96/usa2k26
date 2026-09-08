/* Two themed packing lists. Tickable, and fully editable — add, rename, delete,
   reorder-by-deleting. Edits live in this browser only; "Start over" restores
   the list that ships with the app. */
const Packing = (() => {
  const BAGS = {
    check: 'Hold bag', carry: 'Carry-on', wear: 'Wear it', home: 'Leave home'
  };
  let who = localStorage.getItem('usa2k26.who') || 'man';
  let editing = false;
  const store = w => `usa2k26.pack.${w}`;

  /* A rewritten shipped list supersedes the working copy — otherwise anyone who
     ever tapped edit would keep seeing the list from the day they tapped it. */
  const stamp = w => JSON.stringify(PACKING.lists[w]).length;

  /* On first edit we take a working copy, so everything afterwards is plain
     CRUD on one structure rather than a pile of overrides. */
  function list(w) {
    try {
      const saved = JSON.parse(localStorage.getItem(store(w)) || 'null');
      if (saved && saved.v === stamp(w)) return saved;
      if (saved) localStorage.removeItem(store(w));
    } catch {}
    const base = structuredClone(PACKING.lists[w]);
    base.v = stamp(w);
    base.sections.forEach((s, si) => s.items.forEach((it, ii) => {
      it.id = `${si}-${ii}`;
      it.done = localStorage.getItem(`pk:${w}:${si}:${ii}`) === '1';   // keep old ticks
    }));
    return base;
  }
  const save = (w, L) => localStorage.setItem(store(w), JSON.stringify(L));
  const uid = () => 'x' + Math.random().toString(36).slice(2, 9);

  const esc = s => String(s ?? '').replace(/[<>&"]/g, c =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

  function render() {
    const v = document.getElementById('view-packing');
    if (!v) return;
    if (!PACKING?.lists) { v.innerHTML = '<p class="empty">Packing list not built yet.</p>'; return; }

    const L = list(who);
    let done = 0, total = 0;
    L.sections.forEach(s => s.items.forEach(it => { total++; if (it.done) done++; }));

    v.innerHTML = `
      <div class="brules">
        <div class="h-sec" style="margin-top:8px">What you are allowed to bring</div>
        ${(PACKING.rules || []).map(r => `
          <div class="brule">
            <span class="bleg">${esc(r.leg)}</span>
            <span class="ballow">${esc(r.allow)}</span>
            ${r.note ? `<span class="bnote">${esc(r.note)}</span>` : ''}
          </div>`).join('')}
      </div>

      <div class="whoswitch">
        <button data-who="man"   aria-pressed="${who === 'man'}">${esc(PACKING.lists.man.title)}</button>
        <button data-who="woman" aria-pressed="${who === 'woman'}">${esc(PACKING.lists.woman.title)}</button>
      </div>

      <div class="plist theme-${who} ${editing ? 'editing' : ''}">
        <header class="phead">
          <h2>${esc(L.title)}</h2>
          <p>${esc(L.tagline)}</p>
          <div class="pbar"><i style="width:${total ? (done / total * 100).toFixed(1) : 0}%"></i></div>
          <div class="prow">
            <span class="pcount">${done} of ${total} packed</span>
            <button class="pedit" id="ptoggle">${editing ? 'Done editing' : 'Edit list'}</button>
          </div>
        </header>

        ${L.sections.map((s, si) => `
          <section class="psec">
            <h3>
              <span class="pico">${esc(s.icon || '•')}</span>
              ${editing
                ? `<input class="ename" data-sec="${si}" value="${esc(s.name)}" aria-label="Section name">
                   <button class="pdel" data-delsec="${si}" aria-label="Delete section">✕</button>`
                : esc(s.name)}
            </h3>
            <ul>
              ${s.items.map(it => `
                <li class="${it.done ? 'on' : ''}" data-id="${it.id}">
                  ${editing ? `
                    <div class="edrow">
                      <input class="etext" data-sec="${si}" data-id="${it.id}" data-f="t"
                             value="${esc(it.t)}" aria-label="Item">
                      <input class="enote" data-sec="${si}" data-id="${it.id}" data-f="n"
                             value="${esc(it.n || '')}" placeholder="note (optional)" aria-label="Note">
                      <select class="ebag" data-sec="${si}" data-id="${it.id}" data-f="bag" aria-label="Which bag">
                        ${Object.entries(BAGS).map(([k, label]) =>
                          `<option value="${k}" ${it.bag === k ? 'selected' : ''}>${label}</option>`).join('')}
                      </select>
                      <button class="pdel" data-del="${it.id}" data-sec="${si}" aria-label="Delete item">✕</button>
                    </div>`
                  : `
                    <label>
                      <input type="checkbox" data-tick="${it.id}" ${it.done ? 'checked' : ''}>
                      <span class="box"></span>
                      <span class="ptext"><b>${esc(it.t)}</b>${it.n ? `<small>${esc(it.n)}</small>` : ''}</span>
                      <span class="bag bg-${it.bag}">${BAGS[it.bag] || ''}</span>
                    </label>`}
                </li>`).join('')}
            </ul>
            ${editing ? `<button class="padd" data-add="${si}">+ Add item</button>` : ''}
          </section>`).join('')}

        ${editing ? `
          <button class="padd padd-sec" id="paddsec">+ Add a section</button>
          <button class="btn ghost preset" id="preset">Start over from the original list</button>`
        : `<button class="btn ghost preset" id="pclear">Untick everything</button>`}
      </div>`;

    wire(v, L);
  }

  function wire(v, L) {
    const commit = () => { save(who, L); render(); };

    v.querySelectorAll('.whoswitch button').forEach(b =>
      b.onclick = () => { who = b.dataset.who; localStorage.setItem('usa2k26.who', who); render(); });

    document.getElementById('ptoggle').onclick = () => { editing = !editing; render(); };

    v.querySelectorAll('input[data-tick]').forEach(cb => cb.onchange = () => {
      for (const s of L.sections) for (const it of s.items)
        if (it.id === cb.dataset.tick) it.done = cb.checked;
      save(who, L);
      cb.closest('li').classList.toggle('on', cb.checked);
      let d = 0, t = 0;
      L.sections.forEach(s => s.items.forEach(i => { t++; if (i.done) d++; }));
      v.querySelector('.pbar i').style.width = t ? (d / t * 100).toFixed(1) + '%' : 0;
      v.querySelector('.pcount').textContent = `${d} of ${t} packed`;
    });

    /* Edits save on blur so typing is never interrupted by a re-render. */
    v.querySelectorAll('.etext,.enote,.ebag').forEach(el => el.onchange = () => {
      const s = L.sections[+el.dataset.sec];
      const it = s.items.find(i => i.id === el.dataset.id);
      if (!it) return;
      it[el.dataset.f] = el.value.trim();
      if (el.dataset.f === 'n' && !it.n) delete it.n;
      save(who, L);
    });
    v.querySelectorAll('.ename').forEach(el => el.onchange = () => {
      L.sections[+el.dataset.sec].name = el.value.trim() || 'Untitled';
      save(who, L);
    });

    v.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
      const s = L.sections[+b.dataset.sec];
      s.items = s.items.filter(i => i.id !== b.dataset.del);
      commit();
    });
    v.querySelectorAll('[data-delsec]').forEach(b => b.onclick = () => {
      L.sections.splice(+b.dataset.delsec, 1);
      commit();
    });
    v.querySelectorAll('[data-add]').forEach(b => b.onclick = () => {
      L.sections[+b.dataset.add].items.push({ id: uid(), t: '', n: '', bag: 'check', done: false });
      commit();
      const rows = v.querySelectorAll(`.psec:nth-of-type(${+b.dataset.add + 1}) .etext`);
      rows[rows.length - 1]?.focus();
    });

    const addsec = document.getElementById('paddsec');
    if (addsec) addsec.onclick = () => {
      L.sections.push({ name: 'New section', icon: '📦',
        items: [{ id: uid(), t: '', n: '', bag: 'check', done: false }] });
      commit();
    };

    const reset = document.getElementById('preset');
    if (reset) reset.onclick = () => {
      localStorage.removeItem(store(who));
      editing = false;
      render();
    };

    const clear = document.getElementById('pclear');
    if (clear) clear.onclick = () => {
      L.sections.forEach(s => s.items.forEach(i => i.done = false));
      commit();
    };
  }

  return { render };
})();
