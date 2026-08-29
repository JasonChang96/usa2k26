/* USA 2K26 — photo receiver.
   Deployed as a web app running as Jason, open to anyone, so people can upload
   without a Google account of their own. Paste this whole file into
   script.google.com, then Deploy > New deployment > Web app.

   Execute as:      Me
   Who has access:  Anyone

   The upload link is published in the site's source, so this script is the only
   thing standing between that link and the folder. It can ONLY create files —
   never read, never delete — and it refuses anything that is not an image or a
   video, anything oversized, and anything past a daily ceiling.
*/

var FOLDER_ID  = '1G9g5oNrdhP0jK8dQS-z9Xugcw5ypgU1q';   // "Photo Dump"
var MAX_BYTES  = 25 * 1024 * 1024;
var MAX_PER_DAY = 400;

function doPost(e) {
  try {
    var p = JSON.parse(e.postData.contents);
    if (!p.data) return reply({ ok: false, error: 'no file data' });

    var type = String(p.type || '');
    if (!/^(image|video)\//.test(type))
      return reply({ ok: false, error: 'only photos and videos' });

    var bytes = Utilities.base64Decode(p.data);
    if (bytes.length > MAX_BYTES)
      return reply({ ok: false, error: 'file too big (max 25MB)' });

    if (!underDailyCap())
      return reply({ ok: false, error: 'daily upload limit reached — tell Jason' });

    var blob = Utilities.newBlob(bytes, type, sanitise(p.name));
    var file = DriveApp.getFolderById(FOLDER_ID).createFile(blob);
    return reply({ ok: true, id: file.getId(), name: file.getName() });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

/* Lets the app check the endpoint is alive before anyone uploads. */
function doGet() {
  return reply({ ok: true, folder: DriveApp.getFolderById(FOLDER_ID).getName() });
}

/* A runaway script or a found link cannot quietly fill the Drive overnight. */
function underDailyCap() {
  var props = PropertiesService.getScriptProperties();
  var today = Utilities.formatDate(new Date(), 'UTC', 'yyyyMMdd');
  var count = props.getProperty('day') === today ? Number(props.getProperty('n')) : 0;
  if (count >= MAX_PER_DAY) return false;
  props.setProperties({ day: today, n: String(count + 1) });
  return true;
}

/* Keep the uploader's name but stamp it, so two phones cannot collide. */
function sanitise(name) {
  var clean = String(name || 'photo').replace(/[\/\\:*?"<>|]/g, '-').slice(0, 90);
  var stamp = Utilities.formatDate(new Date(), 'UTC', 'yyyyMMdd-HHmmss');
  var dot = clean.lastIndexOf('.');
  return dot > 0
    ? clean.slice(0, dot) + '-' + stamp + clean.slice(dot)
    : clean + '-' + stamp;
}

function reply(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
