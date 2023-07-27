const request = require('supertest');
const { app } = require('../app');

describe('Private routes', () => {

  let token;

  beforeAll(async () => {
    // Log in to get a token
    const res = await request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: 'Admin123'
      });

    token = res.body.token;
  });

  it('Authorize access to private route with correct token returning status 200', async () => {
    const res = await request(app)
      .get('/bookings')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
  });

  it('Authorize fails to private route with incorrect token returning status 403', async () => {
    const res = await request(app)
      .get('/bookings')
      .set('Authorization', 'Bearer wrongToken');

    expect(res.statusCode).toEqual(403);
    expect(res.body).toHaveProperty('auth', false);
  });
});