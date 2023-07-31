import express from "express";
import { RoomInterface } from "../models/Room";
import { deleteRoomService, getRoomService, getRoomsService, postRoomService, updateRoomService } from "../services/room";

//GET all rooms
export const getRooms = async (req: express.Request, res: express.Response) => {
  try {
    const rooms = await getRoomsService();
    res.status(200).json(rooms);
    
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//GET room by id
export const getRoom = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const room = await getRoomService(id);
    res.status(200).json(room);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//POST new Room
export const postRoom = async (req: express.Request<{},{},RoomInterface> , res: express.Response) => {
  try {
    const room = await postRoomService(req.body);
    res.status(201).json({ message: 'Room successfully created!', room });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE room
export const deleteRoom = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    const { id } = req.params;
    const room = await deleteRoomService(id);
    res.status(200).json({ message: "Room successfully deleted", room });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE room
export const updateRoom = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const room = await updateRoomService(id, req.body);
    res.status(200).json({ message: "Room successfully updated", room });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};