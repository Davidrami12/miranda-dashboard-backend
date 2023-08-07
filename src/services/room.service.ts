import express from "express";
import { RoomInterface } from "../models/Room";
import { Room } from "../schemas/room.schema";

export const getRoomsService = async () => {
  return await Room.find({});
};

export const getRoomService = async (id: string) => {
  const room = await Room.findById(id);
  if (!room){
    throw new Error('Room not found');
  } 
  return room;
};

export const postRoomService = async (roomData: RoomInterface) => {
  const room = new Room(roomData);
  await room.save();
  return room;
};

export const deleteRoomService = async (id: string) => {
  const room = await Room.findByIdAndDelete(id);
  if (!room){
    throw new Error('Room not found');
  } 
  return room;
};

export const updateRoomService = async (id: string, roomData: RoomInterface) => {
  const room = await Room.findByIdAndUpdate(id, roomData, { new: true });
  if (!room){
    throw new Error('Room not found');
  } 
  return room;
};