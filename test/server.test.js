const app = require('../server');
const request = require('supertest');

describe('API', () => {

  describe('GET /api/v1/users', () => {
    it('should get 200', done => {
      request(app)
        .get('/api/v1/users')
        .expect(200, done);
    });
    it('should get json', done => {
      request(app)
        .get('/api/v1/users')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('POST /api/v1/users', () => {
    it('responds with json', done => {
      request(app)
        .post('/api/v1/users')
        .send({
          email: "john.smith@example.com"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /api/v1/users/:email', () => {
    it('should get 200', done => {
      request(app)
        .get('/api/v1/users/john.smith@example.com')
        .expect(200, done);
    });
    /*
    it('should get json', done => {
      request(app)
        .get('/api/v1/users/john.smith@example.com')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    */
  });

});
