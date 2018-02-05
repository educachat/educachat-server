let express = require('express');
let db = require('./db');
let app = express();

let UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;