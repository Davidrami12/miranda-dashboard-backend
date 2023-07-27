const request = require('supertest');
const { app } = require('../app');

describe('POST /login test', () => {
  it('Login successful returning status 200', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: 'Admin123'
      });

    expect(res.statusCode).toEqual(200);
  });

  it('Login fails with incorrect credentials returning status 401', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'incorrect@email.com',
        password: 'wrongPassword'
      });

    expect(res.statusCode).toEqual(401);
  });
});
