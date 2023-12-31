import express from 'express';
import { deleteRoom, getRoom, getRooms, postRoom, updateRoom } from '../controllers/room.controller';

export const roomRoutes = express.Router();

//GET all rooms
roomRoutes.get('/', getRooms);

//GET single room
roomRoutes.get('/:id', getRoom);

//POST new room
roomRoutes.post('/', postRoom);

//DELETE room
roomRoutes.delete('/:id', deleteRoom);

//UPDATE room
roomRoutes.put('/:id', updateRoom);