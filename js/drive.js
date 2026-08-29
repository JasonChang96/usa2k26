/* Photo upload. Files are POSTed to a Google Apps Script web app that runs as
   Jason and writes into the shared folder, so nobody uploading needs a Google
   account of their own. The endpoint URL lives in localStorage, not the repo. */
(() => {
  /* Baked in so nobody has to configure anything. It is a write-only drop box:
     the script behind it can only create files, never read or delete. A value in
     localStorage overrides it, so the endpoint can be swapped without a redeploy. */
  const DEFAULT_ENDPOINT =
    'https://script.google.com/macros/s/AKfycbxl8c2DnVLfAWnYixyKt2TBtt0geeOQP5ks--eKhxpeJw31KNJc4wiQZHHsJ4xGhDytOA/exec';

  const CFG = {
    get url() { return localStorage.getItem('usa2k26.endpoint') || DEFAULT_ENDPOINT; },
    set(u) {
      const v = u.trim();
      v ? localStorage.setItem('usa2k26.endpoint', v)
        : localStorage.removeItem('usa2k26.endpoint');
    }
  };
  const MAX = 25 * 1024 * 1024;   // Apps Script chokes well before this

  const dz     = document.getElementById('dz');
  const input  = document.getElementById('file');
  const queue  = document.getElementById('queue');
  const note   = document.getElementById('cfg-note');
  const pick   = document.getElementById('pick');

  const line = name => {
    const row = document.createElement('div');
    row.innerHTML = `<span>${name}</span><span class="state">…</span>`;
    queue.prepend(row);
    return row.querySelector('.state');
  };

  const toBase64 = file => new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(',')[1]);
    r.onerror = () => rej(new Error('could not read file'));
    r.readAsDataURL(file);
  });

  async function upload(file) {
    const body = JSON.stringify({
      name: file.name,
      type: file.type || 'application/octet-stream',
      data: await toBase64(file)
    });
    /* text/plain keeps this a "simple" request — Apps Script cannot answer a
       CORS preflight, so anything that triggers one fails outright. */
    const r = await fetch(CFG.url, {
      method: 'POST', body, headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    });
    const out = await r.json();
    if (!out.ok) throw new Error(out.error || 'rejected');
    return out;
  }

  async function send(files) {
    if (!files.length) return;
    if (!CFG.url) return prompt();
    for (const f of files) {
      const state = line(f.name);
      if (f.size > MAX) {
        state.textContent = 'too big (max 25MB)';
        state.className = 'state err';
        continue;
      }
      try {
        await upload(f);
        state.textContent = 'uploaded';
        state.className = 'state ok';
      } catch (e) {
        state.textContent = e.message.slice(0, 48);
        state.className = 'state err';
      }
    }
  }

  function prompt() {
    document.getElementById('setup').open = true;
    note.textContent = 'Not connected yet — paste the upload link below.';
    note.className = 'err';
    document.getElementById('cfg-endpoint').focus();
  }

  function reflect() {
    pick.textContent = CFG.url ? 'Upload photos' : 'Connect uploads first';
    dz.classList.toggle('unset', !CFG.url);
  }

  pick.onclick = () => CFG.url ? input.click() : prompt();
  input.onchange = () => { send([...input.files]); input.value = ''; };

  ['dragenter', 'dragover'].forEach(ev =>
    dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('hot'); }));
  ['dragleave', 'drop'].forEach(ev =>
    dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove('hot'); }));
  dz.addEventListener('drop', e => send([...e.dataTransfer.files]));

  const field = document.getElementById('cfg-endpoint');
  field.value = localStorage.getItem('usa2k26.endpoint') || '';
  document.getElementById('save-cfg').onclick = async () => {
    CFG.set(field.value);
    reflect();
    note.textContent = 'Checking…';
    note.className = '';
    try {
      const out = await (await fetch(CFG.url)).json();
      note.textContent = out.ok ? `Connected to "${out.folder}".` : 'Endpoint replied with an error.';
      note.className = out.ok ? 'ok' : 'err';
    } catch {
      note.textContent = 'Saved, but could not reach that link. Check it ends in /exec.';
      note.className = 'err';
    }
  };

  reflect();
})();
