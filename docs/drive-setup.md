# Photo upload → Google Drive

The Photos tab uploads straight into a Drive folder. It needs a one-time OAuth client,
because Google will not let a web page touch Drive without one. Ten minutes, once.

## 1. Make the Drive folder

In Google Drive, create the folder (e.g. "USA 2K26 photos") and share it with whoever
is on the trip, with **Editor** access. Open it and copy the id out of the address bar —
the part after `/folders/`.

## 2. Create the OAuth client

1. <https://console.cloud.google.com/> → create a project (any name).
2. **APIs & Services → Library** → search **Google Drive API** → Enable.
3. **APIs & Services → OAuth consent screen** → External → fill in the app name and your
   email. Under **Test users**, add every Google account that will upload photos.
   (Leave it in Testing mode — no verification needed for a handful of people.)
4. **APIs & Services → Credentials** → **Create credentials → OAuth client ID** →
   **Web application**.
5. Under **Authorised JavaScript origins**, add wherever the app is served from:
   - `https://jasonchang96.github.io` for the published site
   - `http://localhost:8899` if you also run it locally
6. Copy the client ID.

## 3. Paste it into the app

Photos tab → **Set up / change folder** → paste the client ID and the folder id → Save.
This is stored in that browser only, so each person does it once on their own phone.

The app asks for the `drive.file` scope, which only lets it see files it created itself —
it cannot read the rest of anyone's Drive.

## If uploads fail

- **"access blocked"** — the account is not on the Test users list in step 3.
- **"origin mismatch"** — the address in the browser bar is not in step 5. It must match
  exactly, protocol included.
- **404 on the folder** — the folder id is wrong, or the account has no Editor access.
