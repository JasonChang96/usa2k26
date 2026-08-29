/* Hand-drawn cats and pawprints. Original artwork — same sticker style as the
   reference, but nothing traced or copied. Injected once, placed by CSS. */
(() => {
  const O = 'var(--fur-line)', G = 'var(--fur)', D = 'var(--fur-dark)',
        C = 'var(--fur-cream)', P = 'var(--fur-ear)';

  const sprite = `
<svg id="cat-sprite" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <symbol id="cat-loaf" viewBox="0 0 132 80">
    <g fill="none" stroke="${O}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M108 64c11 1 17-6 16-14-1-7-8-10-13-7" fill="${G}"/>
      <path d="M52 66c-6-14-2-28 12-33 20-7 46-2 54 12 5 9 4 17-2 21z" fill="${G}"/>
      <path d="M24 30l2-16 15 9z" fill="${G}"/>
      <path d="M46 23l15-9 -1 17z" fill="${G}"/>
      <circle cx="38" cy="44" r="20" fill="${G}"/>
      <path d="M27 28l1-9 8 5z" fill="${P}" stroke-width="2"/>
      <path d="M49 24l8-5 -1 9z" fill="${P}" stroke-width="2"/>
      <path d="M78 38c6 2 9 5 10 9M92 36c6 2 9 5 10 9M84 52c6 2 9 5 10 9" stroke="${D}" stroke-width="3"/>
      <path d="M28 43q3.5 4.5 7 0M42 43q3.5 4.5 7 0" stroke-width="3"/>
      <ellipse cx="38" cy="53" rx="8.5" ry="6" fill="${C}"/>
      <path d="M34 51q4 3 8 0" stroke-width="2.6"/>
      <path d="M12 44h10M13 51h10" stroke-width="2.4"/>
      <path d="M30 64q8-7 16 0" fill="${C}"/>
    </g>
  </symbol>

  <symbol id="cat-peek" viewBox="0 0 116 74">
    <g fill="none" stroke="${O}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="58" cy="38" r="26" fill="${G}"/>
      <path d="M36 20l-2-16 16 9z" fill="${G}"/>
      <path d="M80 20l2-16-16 9z" fill="${G}"/>
      <path d="M39 18l-1-9 9 5z" fill="${P}" stroke-width="2"/>
      <path d="M77 18l1-9-9 5z" fill="${P}" stroke-width="2"/>
      <path d="M56 22c5 1 8 3 10 6M66 30c5 1 8 3 10 6" stroke="${D}" stroke-width="3"/>
      <path d="M45 38c2.5 3 6 3 8.5 0M62 38c2.5 3 6 3 8.5 0"/>
      <ellipse cx="58" cy="49" rx="9" ry="7" fill="${C}"/>
      <path d="M54 47c2 2 6 2 8 0"/>
      <path d="M22 46h14M22 52h14M80 46h14M80 52h14" stroke-width="2.6"/>
      <path d="M34 62c0-6 4-10 10-10s10 4 10 10z" fill="${C}"/>
      <path d="M62 62c0-6 4-10 10-10s10 4 10 10z" fill="${C}"/>
    </g>
  </symbol>

  <symbol id="cat-flop" viewBox="0 0 150 70">
    <g fill="none" stroke="${O}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M120 54c12 0 20-8 18-17-1-7-8-10-13-6" fill="${G}"/>
      <path d="M54 56c-7-12-4-25 10-30 22-8 50-2 58 13 5 9 3 17-4 21z" fill="${G}"/>
      <path d="M22 28l3-16 15 10z" fill="${G}"/>
      <path d="M45 21l16-9 -2 17z" fill="${G}"/>
      <circle cx="37" cy="41" r="19" fill="${G}"/>
      <path d="M25 26l1-9 8 6z" fill="${P}" stroke-width="2"/>
      <path d="M48 22l8-5 -1 9z" fill="${P}" stroke-width="2"/>
      <path d="M82 34c6 2 9 5 10 9M96 32c6 2 9 5 10 9" stroke="${D}" stroke-width="3"/>
      <path d="M27 40q3.5 4.5 7 0M41 40q3.5 4.5 7 0" stroke-width="3"/>
      <ellipse cx="37" cy="50" rx="8" ry="5.5" fill="${C}"/>
      <path d="M33 48q4 3 8 0" stroke-width="2.6"/>
      <path d="M11 41h10M12 48h10" stroke-width="2.4"/>
      <path d="M58 56q9-8 18 0" fill="${C}"/>
    </g>
  </symbol>

  <symbol id="cat-face" viewBox="0 0 72 68">
    <g fill="none" stroke="${O}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 24l-1-16 16 9z" fill="${G}"/>
      <path d="M58 24l1-16-16 9z" fill="${G}"/>
      <circle cx="36" cy="38" r="24" fill="${G}"/>
      <path d="M17 21l-1-9 9 5z" fill="${P}" stroke-width="2"/>
      <path d="M55 21l1-9-9 5z" fill="${P}" stroke-width="2"/>
      <path d="M25 36q4 5 8 0M39 36q4 5 8 0" stroke-width="3.2"/>
      <ellipse cx="36" cy="47" rx="8.5" ry="6" fill="${C}"/>
      <path d="M32 45q4 3 8 0" stroke-width="2.6"/>
      <path d="M4 40h12M5 47h12M56 40h12M55 47h12" stroke-width="2.4"/>
    </g>
  </symbol>

  <symbol id="paw" viewBox="0 0 26 26">
    <g fill="currentColor">
      <ellipse cx="13" cy="18" rx="7" ry="5.6"/>
      <ellipse cx="5"  cy="10" rx="3"   ry="3.8"/>
      <ellipse cx="11" cy="6.5" rx="3"  ry="4"/>
      <ellipse cx="17" cy="7"  rx="3"   ry="4"/>
      <ellipse cx="22" cy="12" rx="2.8" ry="3.6"/>
    </g>
  </symbol>
</svg>`;

  document.body.insertAdjacentHTML('afterbegin', sprite);

  const cat  = (id, cls) => `<svg class="cat ${cls}"><use href="#${id}"/></svg>`;
  const paws = n => '<div class="pawtrail">' +
    Array.from({ length: n }, (_, i) =>
      `<svg class="paw" viewBox="0 0 26 26" style="--i:${i}"><use href="#paw"/></svg>`).join('') + '</div>';

  /* One cat peeking over the masthead, one asleep on the footer. */
  document.querySelector('.masthead')
    ?.insertAdjacentHTML('beforeend', cat('cat-peek', 'cat-peek'));
  document.querySelector('footer')?.insertAdjacentHTML('afterbegin',
    `<div class="catpair">${cat('cat-loaf', 'cat-loaf grey')}${cat('cat-flop', 'cat-flop')}</div>`);

  /* A loaf naps on the last leg divider; pawprints wander between the others. */
  const POSES = [
    ['cat-loaf', 'cat-loaf'],
    ['cat-flop', 'cat-flop grey'],
    ['cat-loaf', 'cat-loaf grey'],
    ['cat-flop', 'cat-flop']
  ];
  const decorate = () => {
    document.querySelectorAll('.leg:not([data-cat])').forEach((leg, i) => {
      leg.dataset.cat = '1';
      const [id, cls] = POSES[i % POSES.length];
      leg.insertAdjacentHTML('beforeend', cat(id, cls) + paws(3));
    });
  };
  decorate();
  new MutationObserver(decorate)
    .observe(document.getElementById('view-itinerary'), { childList: true });
})();
