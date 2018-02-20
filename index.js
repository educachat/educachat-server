// let app = require('./app');

const express = require('express');
const bodyParser = require('body-parser');

// let db = require('./database/index');

let app = express();
let port = process.env.PORT || 3700;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

app.get('/', (req, res) => {
  console.log('root');
  res.send('Ok');
});

app.listen(port, () => console.log('Listen http://127.0.0.1:' + port));