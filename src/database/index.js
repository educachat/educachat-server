const mongoose = require('mongoose');
let database = require('../config/database.json'); // TODO: verificar criação de banco com nome variável

mongoose.connect(`mongodb://localhost/${database.name}`);
mongoose.Promise = global.Promise;

module.exports = mongoose;