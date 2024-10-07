var admin = require("firebase-admin");

var serviceAccount = require("./src/credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports = admin;