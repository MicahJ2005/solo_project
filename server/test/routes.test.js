let app = require('../server');
let testServer = require('supertest');


describe('Test the root path', () => {
  test('It should respond 200 the LOGOUT route', async () => {
    const response = await testServer(app).post('/api/user/logout');
    expect(response.statusCode).toBe(200);
  });

  test('It should protect the /USER route', async () => {
    const response = await testServer(app).get('/api/user');
    expect(response.statusCode).toBe(403);
  });

// this fails without a build!
  test('It should be HTML Response at the / GET method', async () => {
    const response = await testServer(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('react-root')
  });
})
