import fs from "fs";
import path from "path";
import express from "express";
import { UserInterface } from "../models/User";
import uuid from "react-uuid";
import users from "../data/users.json";
const directory = path.join(__dirname, "..", "data", "users.json");
const readUsers = fs.readFileSync(directory, "utf8");
const usersJson = JSON.parse(readUsers);

export const getUsersService = async (req: express.Request, res: express.Response) => {
  // const response = users;
  // res.status(200).json(response);
  return readUsers; 
};

export const getUserService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const userId = usersJson.find((user: UserInterface) => user.id == id);
  
  if (!userId) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  
  res.send(userId);
};


export const postUserService = async (req: express.Request, res: express.Response) => {
  const newUser: UserInterface = { ...req.body, id: uuid() };

  usersJson.push(newUser);

  fs.writeFileSync(directory, JSON.stringify(usersJson));

  res.status(201).json({ message: 'User successfully created!', user: newUser });
};


export const deleteUserService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const index = usersJson.findIndex((user: UserInterface) => user.id == id);

  if (index === -1) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  
  usersJson.splice(index, 1);
  fs.writeFileSync(directory, JSON.stringify(usersJson));
  
  res.send({ message: "User successfully deleted" });
};



export const updateUserService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const index = usersJson.findIndex((user: UserInterface) => user.id == id);

  if (index === -1) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const updatedUser: UserInterface = { ...usersJson[index], ...req.body };
  usersJson[index] = updatedUser;
  fs.writeFileSync(directory, JSON.stringify(usersJson));

  res.json({ message: "User successfully updated", user: updatedUser });
};
