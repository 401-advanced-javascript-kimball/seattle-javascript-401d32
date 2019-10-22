'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server.app);

describe('Testing server routes', () => {
  it('Should send an array of posts', (done) => {
    mockRequest.get('/posts')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.length).toBe(0);
        done();
      });
  });

  it('should post a new post', (done) => {
    mockRequest
      .post('/posts')
      .send({ name: 'post1', content: 'my first post' })
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toEqual('post1');
        done();
      });
  });
});