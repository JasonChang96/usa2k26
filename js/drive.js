/* Google Drive upload. OAuth client id lives in localStorage — no secrets in this repo. */
(() => {
  const CFG = {
    get client() { return localStorage.getItem('usa2k26.client') || ''; },
    get folder() { return localStorage.getItem('usa2k26.folder') || ''; },
    set(c, f) {
      localStorage.setItem('usa2k26.client', c.trim());
      localStorage.setItem('usa2k26.folder', f.trim());
    }
  };
  const SCOPE = 'https://www.googleapis.com/auth/drive.file';
  let token = null;

  const dz = document.getElementById('dz');
  const input = document.getElementById('file');
  const queue = document.getElementById('queue');
  const note = document.getElementById('cfg-note');

  function line(name) {
    const row = document.createElement('div');
    row.innerHTML = `<span>${name}</span><span class="state">…</span>`;
    queue.prepend(row);
    return row.querySelector('.state');
  }

  function auth() {
    return new Promise((resolve, reject) => {
      if (token && token.exp > Date.now() + 60000) return resolve(token.value);
      if (!CFG.client) return reject(new Error('no-client'));
      if (!window.google?.accounts?.oauth2) return reject(new Error('Google sign-in did not load.'));
      const tc = google.accounts.oauth2.initTokenClient({
        client_id: CFG.client,
        scope: SCOPE,
        callback: r => {
          if (r.error) return reject(new Error(r.error));
          token = { value: r.access_token, exp: Date.now() + (r.expires_in - 60) * 1000 };
          resolve(token.value);
        }
      });
      tc.requestAccessToken({ prompt: token ? '' : 'consent' });
    });
  }

  async function upload(file, access) {
    const meta = { name: file.name, mimeType: file.type || 'application/octet-stream' };
    if (CFG.folder) meta.parents = [CFG.folder];
    const body = new FormData();
    body.append('metadata', new Blob([JSON.stringify(meta)], { type: 'application/json' }));
    body.append('file', file);
    const r = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true',
      { method: 'POST', headers: { Authorization: 'Bearer ' + access }, body });
    if (!r.ok) throw new Error((await r.json())?.error?.message || r.statusText);
    return r.json();
  }

  async function send(files) {
    if (!files.length) return;
    let access;
    try {
      access = await auth();
    } catch (e) {
      document.getElementById('setup').open = true;
      note.textContent = e.message === 'no-client'
        ? 'Add an OAuth client ID below before uploading.'
        : 'Sign-in failed: ' + e.message;
      note.className = 'err';
      return;
    }
    for (const f of files) {
      const state = line(f.name);
      try { await upload(f, access); state.textContent = 'uploaded'; state.className = 'state ok'; }
      catch (e) { state.textContent = e.message.slice(0, 40); state.className = 'state err'; }
    }
  }

  document.getElementById('pick').onclick = () => input.click();
  input.onchange = () => { send([...input.files]); input.value = ''; };

  ['dragenter', 'dragover'].forEach(ev =>
    dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('hot'); }));
  ['dragleave', 'drop'].forEach(ev =>
    dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove('hot'); }));
  dz.addEventListener('drop', e => send([...e.dataTransfer.files]));

  const ci = document.getElementById('cfg-client');
  const fi = document.getElementById('cfg-folder');
  ci.value = CFG.client; fi.value = CFG.folder;
  document.getElementById('save-cfg').onclick = () => {
    CFG.set(ci.value, fi.value);
    token = null;
    note.textContent = 'Saved on this device.';
    note.className = 'ok';
  };
})();
