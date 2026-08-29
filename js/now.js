/* Two clocks and a live seven-day forecast. Open-Meteo, free, no key. */
(() => {
  const ZONES = [
    { label: 'Mountain', tz: 'America/Denver',      places: ['Salt Lake City', 'Yellowstone', 'Kalispell'] },
    { label: 'Pacific',  tz: 'America/Los_Angeles', places: ['Seattle', 'Vancouver'] }
  ];
  const PLACES = [
    { name: 'Salt Lake City', lat: 40.7608, lon: -111.8910 },
    { name: 'Yellowstone',    lat: 44.6621, lon: -111.1041 },
    { name: 'Kalispell',      lat: 48.1958, lon: -114.3129 },
    { name: 'Seattle',        lat: 47.6062, lon: -122.3321 },
    { name: 'Vancouver',      lat: 49.2827, lon: -123.1207 }
  ];

  /* WMO weather codes, collapsed to the handful of states that matter. */
  const SKY = c =>
    c === 0            ? ['☀', 'clear']    :
    c <= 2             ? ['🌤', 'fair']     :
    c === 3            ? ['☁', 'cloud']    :
    c <= 48            ? ['🌫', 'fog']      :
    c <= 57            ? ['🌦', 'drizzle']  :
    c <= 67            ? ['🌧', 'rain']     :
    c <= 77            ? ['🌨', 'snow']     :
    c <= 82            ? ['🌧', 'showers']  :
    c <= 86            ? ['🌨', 'snow']     :
                         ['⛈', 'storm'];

  const clocks = document.getElementById('clocks');
  const wx     = document.getElementById('wx');

  function tick() {
    clocks.innerHTML = ZONES.map(z => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-GB',
        { timeZone: z.tz, hour: '2-digit', minute: '2-digit' });
      const day = now.toLocaleDateString('en-GB',
        { timeZone: z.tz, weekday: 'short', day: 'numeric', month: 'short' });
      return `<div class="clock">
        <div class="zn">${z.label}</div>
        <div class="tm">${time}</div>
        <div class="dy">${day}</div>
        <div class="pl">${z.places.join(' · ')}</div>
      </div>`;
    }).join('');
  }

  async function weather() {
    const url = 'https://api.open-meteo.com/v1/forecast?' + new URLSearchParams({
      latitude:  PLACES.map(p => p.lat).join(','),
      longitude: PLACES.map(p => p.lon).join(','),
      current: 'temperature_2m,weather_code',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min',
      timezone: 'auto', forecast_days: '7'
    });
    let data;
    try { data = await (await fetch(url)).json(); }
    catch { wx.innerHTML = '<p class="wx-fail">Weather unavailable — no connection.</p>'; return; }

    wx.innerHTML = PLACES.map((p, i) => {
      const d = Array.isArray(data) ? data[i] : data;
      if (!d?.daily) return '';
      const [icon] = SKY(d.current.weather_code);
      const days = d.daily.time.map((t, n) => {
        const [ic] = SKY(d.daily.weather_code[n]);
        const dow = new Date(t + 'T12:00:00')
          .toLocaleDateString('en-GB', { weekday: 'narrow' });
        return `<div class="wd">
          <span class="wdow">${dow}</span>
          <span class="wic">${ic}</span>
          <span class="wmx">${Math.round(d.daily.temperature_2m_max[n])}°</span>
        </div>`;
      }).join('');
      return `<article class="wcard">
        <header>
          <span class="wname">${p.name}</span>
          <span class="wnow">${icon} ${Math.round(d.current.temperature_2m)}°</span>
        </header>
        <div class="wweek">${days}</div>
      </article>`;
    }).join('');
  }

  tick();
  setInterval(tick, 15000);
  weather();
})();
