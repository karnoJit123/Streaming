const app = require('./app.js');
const config = require('./config.js');

app.listen(config.PORT, config.HOST, () => {
    console.log(`Server is listening on http://${config.HOST}:${config.PORT}`);
});