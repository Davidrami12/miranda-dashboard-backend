import express from 'express';
import { deleteUser, getUser, getUsers, postUser, updateUser } from '../controllers/user';

export const userRoutes = express.Router();

//GET all users
userRoutes.get('/', getUsers);

//GET single user
userRoutes.get('/:id', getUser);

//POST new User
userRoutes.post('/', postUser);

//DELETE user
userRoutes.delete('/:id', deleteUser);

//UPDATE user
userRoutes.put('/:id', updateUser);