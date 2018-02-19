const express = require('express');
const bodyParser = require('body-parser');

let db = require('./db');

let app = express();
let port = process.env.PORT || 3700;
app.listen(port, () => console.log('Listen http://127.0.0.1:' + port));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;