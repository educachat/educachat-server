describe('Routes Users', () => {

  let user = {
    "email": "test1@gmail.com",
    "name": "Rafael",
    "password": "123456",
  };

  const userLogin = {
    "email": "test1@gmail.com",
    "password": "123456",
  };

  describe('Route GET /users', () => {

    it('should create user', done => {
      request
        .post('/auth/register')
        .send(user)
        .expect(200)
        .end((err, res) => {
          user.token = res.body.token;
          done();
        });
    });

    it('should return token not informed', done => {
      request
        .get('/users')
        .expect(401)
        .end((err, res) => {
          expect(res.body.error).to.be.eql('Token não informado');
          done(err);
        });
    });

    beforeEach(function(done) {
      request
        .post('/auth/authenticate')
        .send(userLogin)
        .end(function(err, res) {
          token = res.body.token;
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
          expect(res.body[0].name).to.be.eql(user.name);
          expect(res.body[0].id).to.be.eql(user.id);
          done(err);

        });
    });
  });
});