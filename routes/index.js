const express = require('express');
const router = express.Router();

router.use("/fileUpload", require("./fileUpload"));
module.exports = router;