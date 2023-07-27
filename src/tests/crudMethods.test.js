const request = require('supertest');
const { app } = require('../app');

describe('User CRUD operations', () => {
  let newUser;
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

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .set('Authorization', `Bearer ${token}`)
      .send({
        photo: 'https://example.com/photo.jpg',
        name: 'Test User',
        position: 'Test Position',
        email: 'test@example.com',
        phone: 1234567890,
        date: '2023-01-01',
        description: 'Test Description',
        state: 'Test State',
        pass: 'TestPass123'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.user.name).toBe('Test User');
    newUser = res.body.user;
  });

  it('should get the created user', async () => {
    const res = await request(app)
      .get(`/users/${newUser.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe(newUser.name);
  });

  it('should update the user', async () => {
    const res = await request(app)
      .put(`/users/${newUser.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Updated User'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.user.name).toBe('Updated User');
    newUser = res.body.user;
  });

  it('should delete the user', async () => {
    const res = await request(app)
      .delete(`/users/${newUser.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('User successfully deleted');
  });

  it('should not get the deleted user', async () => {
    const res = await request(app)
      .get(`/users/${newUser.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(404);
  });
});