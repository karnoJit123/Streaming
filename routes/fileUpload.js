const express = require('express');
const router = express.Router();
const uploadMiddleware = require("../middleware/upload.js");
const  Controller=require('../src/fileUpload/controller.js')
router.use(uploadMiddleware.any());


router.post('/upload',Controller.upload)

module.exports = router;