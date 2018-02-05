let mongoose = require('mongoose');

// TODO: verificar criação de banco com nome variável
let database = 'educachat';
mongoose.connect('mongodb://localhost/' + database);

