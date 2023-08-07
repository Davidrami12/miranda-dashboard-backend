import express from "express";
import { UserInterface } from "../models/User";
import { User } from "../schemas/user.schema";

export const getUsersService = async () => {
  return await User.find({});
};

export const getUserService = async (id: string) => {
  const room = await User.findById(id);
  if (!room){
    throw new Error('User not found');
  } 
  return room;
};

export const postUserService = async (roomData: UserInterface) => {
  const room = new User(roomData);
  await room.save();
  return room;
};

export const deleteUserService = async (id: string) => {
  const room = await User.findByIdAndDelete(id);
  if (!room){
    throw new Error('User not found');
  } 
  return room;
};

export const updateUserService = async (id: string, roomData: UserInterface) => {
  const room = await User.findByIdAndUpdate(id, roomData, { new: true });
  if (!room){
    throw new Error('User not found');
  } 
  return room;
};