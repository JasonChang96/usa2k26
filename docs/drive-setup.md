# Photo upload — setup

Uploads go through a **Google Apps Script web app** that runs as Jason and writes into
the shared "Photo Dump" folder. That means **nobody uploading needs a Google account** —
not Gmail, not anything. They open the link and tap.

No Google Cloud project, no OAuth client, no API keys, nothing stored in this repo.

## One-time setup (Jason, about five minutes)

1. Go to <https://script.google.com> and click **New project**.
2. Delete whatever is in the editor and paste in the whole of
   `docs/apps-script/Code.gs` from this repo.
3. Check the `FOLDER_ID` at the top matches the Drive folder you want. It is the part of
   the folder's URL after `/folders/`.
4. Click **Deploy → New deployment**. Choose type **Web app**. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
5. Click Deploy. Google will ask you to authorise it — approve. On the "Google hasn't
   verified this app" screen, click **Advanced → Go to (project name)**. This warning is
   about your own script, which is why it is unverified.
6. Copy the **Web app URL**. It ends in `/exec`.
7. Put the URL into `DEFAULT_ENDPOINT` at the top of `js/drive.js`, then
   `node scripts/build.mjs && git commit -am "new upload endpoint" && git push`.

Nobody else has to configure anything — the Photos tab just works. The override field in
the app's setup panel exists only for pointing a phone at a different folder.

## Changing it later

Editing the script requires **Deploy → Manage deployments → edit → New version**, or the
live URL keeps serving the old code.

## Limits and trade-offs

- **25MB per file.** Files are base64-encoded into the request body, and Apps Script will
  not take much more. Phone photos are fine; long videos are not.
- **The link is published in the site's source, so treat it as public.** It is a
  write-only drop box: the script only ever calls `createFile`, so it cannot read or
  delete anything in your Drive. It also refuses non-media files, anything over 25MB, and
  more than 400 uploads a day. If it is ever abused, **Deploy → Manage deployments →
  Archive**, make a new deployment, and put the new URL in `js/drive.js`.
- Every upload is renamed with a UTC timestamp so two phones cannot overwrite each other.
