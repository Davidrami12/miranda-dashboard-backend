const request = require('supertest');
const { app } = require('../app');

describe('CRUD methods for user', () => {

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


  it('GET - All users', async () => {
  const res = await request(app)
      .get('/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
    expect(typeof res.body[0]).toMatch("object");
  });


  it('POST - Create new user', async () => {
    const res = await request(app)
      .post('/users')
      .set('Authorization', `Bearer ${token}`)
      .send({
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        name: "Mark Evans",
        position: "Reception",
        email: "markev@yahoo.com",
        phone: "644 785 742",
        date: "10/04/2023",
        description: "Answering questions and addressing complaints",
        state: "ACTIVE",
        pass: "seHki5h"
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.user.name).toBe('Mark Evans');
    newUser = res.body.user;
  });


  it('GET - Get created user', async () => {
    const res = await request(app)
      .get(`/users/${newUser.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe(newUser.name);
  });


  it('PUT - Update created user name', async () => {
    const res = await request(app)
      .put(`/users/${newUser.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Change user name'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.user.name).toBe('Change user name');
    newUser = res.body.user;
  });


  it('DETELE - Delete created user', async () => {
    const res = await request(app)
      .delete(`/users/${newUser.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('User successfully deleted');
  });


  it('GET - Fails to get deleted user', async () => {
    const res = await request(app)
      .get(`/users/${newUser.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(404);
  });


  // Tests with non-existing users
  it('GET - Fails to get non-existing user', async () => {
    const res = await request(app)
      .get(`/users/21rjb2432`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(404);
  });


  it('DELETE - Fails to delete non-existing user', async () => {
    const res = await request(app)
      .delete(`/users/21rjb2432`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(404);
  });

  
  it('PUT - Fails to update non-existing user', async () => {
    const res = await request(app)
      .put(`/users/21rjb2432`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Change user name'
      });

    expect(res.statusCode).toEqual(404);
  });

});