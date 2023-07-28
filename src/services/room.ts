import fs from "fs";
import path from "path";
import express from "express";
import { RoomInterface } from "../models/Room";
import uuid from "react-uuid";

const directory = path.join(__dirname, "..", "data", "rooms.json");
const readRooms = fs.readFileSync(directory, "utf8");
const roomsJson = JSON.parse(readRooms);

export const getRoomsService = async (req: express.Request, res: express.Response) => {
  return readRooms; 
};

export const getRoomService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const roomId = roomsJson.find((room: RoomInterface) => room.id == id);
  
  if (!roomId) {
    res.status(404).json({ message: "Room not found" });
    return;
  }
  
  res.send(roomId);
};


export const postRoomService = async (req: express.Request, res: express.Response) => {
  const newRoom: RoomInterface = { ...req.body, id: uuid() };

  roomsJson.push(newRoom);

  fs.writeFileSync(directory, JSON.stringify(roomsJson));

  res.status(201).json({ message: 'Room successfully created!', room: newRoom });
};


export const deleteRoomService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const index = roomsJson.findIndex((room: RoomInterface) => room.id == id);

  if (index === -1) {
    res.status(404).json({ message: "Room not found" });
    return;
  }
  
  roomsJson.splice(index, 1);
  fs.writeFileSync(directory, JSON.stringify(roomsJson));
  
  res.send({ message: "Room successfully deleted" });
};



export const updateRoomService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const index = roomsJson.findIndex((room: RoomInterface) => room.id == id);

  if (index === -1) {
    res.status(404).json({ message: "Room not found" });
    return;
  }

  const updatedRoom: RoomInterface = { ...roomsJson[index], ...req.body };
  roomsJson[index] = updatedRoom;
  fs.writeFileSync(directory, JSON.stringify(roomsJson));

  res.json({ message: "Room successfully updated", room: updatedRoom });
};
