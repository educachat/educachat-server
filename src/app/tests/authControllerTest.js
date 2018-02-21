const nock = require('nock');
const uri = 'http://127.0.0.1:3700';

test("Testando listagem de usuários", function (t) {
  nock(uri)
    .get('/users')
    .reply(200);
});