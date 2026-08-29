/* USA 2K26 — photo receiver.
   Deployed as a web app running as Jason, open to anyone, so people can upload
   without a Google account of their own. Paste this whole file into
   script.google.com, then Deploy > New deployment > Web app.

   Execute as:      Me
   Who has access:  Anyone
*/

var FOLDER_ID = '1G9g5oNrdhP0jK8dQS-z9Xugcw5ypgU1q';   // "Photo Dump"

function doPost(e) {
  try {
    var p = JSON.parse(e.postData.contents);
    if (!p.data) return reply({ ok: false, error: 'no file data' });

    var blob = Utilities.newBlob(
      Utilities.base64Decode(p.data),
      p.type || 'application/octet-stream',
      sanitise(p.name)
    );
    var file = DriveApp.getFolderById(FOLDER_ID).createFile(blob);
    return reply({ ok: true, id: file.getId(), name: file.getName() });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

/* Lets the app check the endpoint is alive before anyone uploads. */
function doGet() {
  var folder = DriveApp.getFolderById(FOLDER_ID);
  return reply({ ok: true, folder: folder.getName() });
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
