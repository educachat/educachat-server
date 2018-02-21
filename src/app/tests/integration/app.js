describe('Routes Users', () => {

  const defaultUser = {
    "createdAt": "2018-02-20T17:10:19.544Z",
		"_id": "5a8c5688a1847e2098ca2920",
		"name": "Rafael",
		"email": "rafaelfms1@gmail.com",
		"__v": 0
  };

  const userLogin = {
    "email": "rafaelfms1@gmail.com",
    "password": "123456",
  };

  describe('Route GET /users', () => {

    it('should return token not informed', done => {
      request
        .get('/users')
        .expect(401)
        .end((err, res) => {
          expect(res.body.error).to.be.eql('Token não informado');
          done(err);
        });
    });

    var token = null;

    before(function(done) {
      request
        .post('/auth/authenticate')
        .send(userLogin)
        .end(function(err, res) {
          token = res.body.token; // Or something
          done();
        });
    });

    it('should return a list of users', done => {
      request
        .get('/users')
        .set('Authorization', 'Bearer ' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {

          expect(res.body[1].name).to.be.eql(defaultUser.name);
          expect(res.body[1].id).to.be.eql(defaultUser.id);
          done(err);

        });
    });
  });
});