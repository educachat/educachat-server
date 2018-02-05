let app = require('./app');
let port = process.env.PORT || 3700;

app.get('/', (req, res) => res.send('It works!'));

app.listen(port, () => console.log('Listen http://127.0.0.1:' + port));