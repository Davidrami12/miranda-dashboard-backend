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
    expect(res.body).toHaveProperty('auth', true);
  });

  it('Login fails with incorrect credentials returning status 401', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'incorrect@email.com',
        password: 'wrongPassword'
      });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ error: "User credentials doesn't match" });
  });

  it('Login fails with empty credentials returning error', async () => {
    const res = await request(app)
      .post('/login')
      .send({});

    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ error: 'Missing user credentials' });
  });
});