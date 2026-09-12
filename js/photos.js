/* Wikimedia Commons image lookup. Free, attributed, no key, no build step. */
const Photos = (() => {
  const API = 'https://commons.wikimedia.org/w/api.php';
  const TTL = 1000 * 60 * 60 * 24 * 30;
  const mem = new Map();

  /* Commons ranks old prints, maps and signage highly for place names. Skip those. */
  const JUNK = /\b(map|plan|engraving|lithograph|drawing|sketch|poster|logo|seal|coat of arms|diagram|chart|sign|plaque|postcard|stamp|1[6-9]\d\d)\b/i;

  const read = k => {
    try {
      const raw = localStorage.getItem('ph:' + k);
      if (!raw) return null;
      const { t, v } = JSON.parse(raw);
      return Date.now() - t > TTL ? null : v;
    } catch { return null; }
  };
  const write = (k, v) => {
    try { localStorage.setItem('ph:' + k, JSON.stringify({ t: Date.now(), v })); } catch {}
  };

  async function search(q, limit = 1) {
    const key = q + '|' + limit;
    if (mem.has(key)) return mem.get(key);
    const hit = read(key);
    if (hit) { mem.set(key, hit); return hit; }

    const p = (async () => {
      const url = API + '?' + new URLSearchParams({
        action: 'query', generator: 'search', gsrsearch: q,
        gsrnamespace: '6', gsrlimit: String(Math.max(8, limit * 4)),
        prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '900',
        format: 'json', origin: '*'
      });
      let out = [];
      try {
        const j = await (await fetch(url)).json();
        const pages = Object.values(j?.query?.pages || {})
          .sort((a, b) => (a.index ?? 99) - (b.index ?? 99));
        const usable = pages
          .filter(p => /\.(jpe?g|png)(\?|$)/i.test(p.imageinfo?.[0]?.url || ''))
          .map(p => ({
            src: p.imageinfo[0].thumburl || p.imageinfo[0].url,
            title: (p.title || '').replace(/^File:|\.\w+$/g, ''),
            by: (p.imageinfo[0].extmetadata?.Artist?.value || '')
              .replace(/<[^>]+>/g, '').trim().slice(0, 60)
          }));
        const clean = usable.filter(p => !JUNK.test(p.title));
        out = (clean.length ? clean : usable).slice(0, limit);
      } catch { out = []; }
      if (out.length) write(key, out);
      mem.set(key, out);
      return out;
    })();

    mem.set(key, p);          // dedupe in-flight requests
    return p;
  }

  async function fill(el) {
    /* Two stops in a section can share a search phrase; nth walks further down
       the results so they do not end up showing the same picture. */
    const nth = +(el.dataset.nth || 0);
    const results = await search(el.dataset.q, nth + 1);
    /* A narrow phrase can return fewer images than we asked for. Falling back to
       the first result would just repeat a picture already on the page, so a
       strict slot removes itself instead. */
    if (el.dataset.strict && !results[nth]) { el.closest('figure')?.remove(); return; }
    const p = results[nth] || results[0];
    if (!p) { el.closest('figure[data-strict]')?.remove(); return; }
    if (el.tagName === 'IMG') { el.src = p.src; el.alt = el.dataset.q; }
    else el.style.backgroundImage = `url("${p.src}")`;
    el.classList.add('loaded');
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      fill(e.target);          // deliberately not awaited — all in flight at once
    });
  }, { rootMargin: '500px' });

  const watch = root => root.querySelectorAll('[data-q]').forEach(el => io.observe(el));

  return { search, watch };
})();
