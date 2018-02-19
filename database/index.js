const mongoose = require('mongoose');
let database = 'educachat'; // TODO: verificar criação de banco com nome variável

mongoose.connect(`mongodb://localhost/${database}`);
mongoose.Promise = global.Promise;

module.exports = mongoose;