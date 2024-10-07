const express = require('express');
const cors = require('cors');
const app = express();
// const db = require("./connection");
const bodyParser = require('body-parser');
const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (_, response) => { response.json({ message: "Welcome to Streaming Application" }) });

// const setupSwagger = require('./swagger');
// setupSwagger(app);

app.use("/api/v1", require("./routes/index"));

module.exports = app;