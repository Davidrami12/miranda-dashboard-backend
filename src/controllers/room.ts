import express from "express";
import { RoomInterface } from "../models/Room";
import { deleteRoomService, getRoomService, getRoomsService, postRoomService, updateRoomService } from "../services/room";

//GET all rooms
export const getRooms = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getRoomsService(req, res);
    res.status(200).json(JSON.parse(response));
    
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//GET room by id
export const getRoom = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getRoomService(req, res);
    res.status(200).json(response);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//POST new Room
export const postRoom = async (req: express.Request<{},{},RoomInterface> , res: express.Response) => {
  try {
    const response = await postRoomService(req, res);
    res.status(200).json(response);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE room
export const deleteRoom = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    const response = await deleteRoomService(req, res);
    res.status(200).json(response);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE room
export const updateRoom = async (req: express.Request, res: express.Response) => {
  try {
    const response = await updateRoomService(req, res);
    res.status(200).json(response);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};