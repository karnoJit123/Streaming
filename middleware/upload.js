const multer = require("multer");
const path = require('path');
const os = require('os');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // cb(null, path.resolve(path.dirname('')) + "/resources/static/assets/uploads/");
        cb(null, path.resolve(os.tmpdir()));
    },

    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    },
});

var uploadFile = multer({ storage: storage, });

module.exports = uploadFile;