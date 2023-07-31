import express from "express";
import { UserInterface } from "../models/User";
import { deleteUserService, getUserService, getUsersService, postUserService, updateUserService } from "../services/user";

//GET all users
export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
    
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//GET user by id
export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const user = await getUserService(id);
    res.status(200).json(user);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//POST new User
export const postUser = async (req: express.Request<{},{},UserInterface> , res: express.Response) => {
  try {
    const user = await postUserService(req.body);
    res.status(201).json({ message: 'User successfully created!', user });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE user
export const deleteUser = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    const { id } = req.params;
    const user = await deleteUserService(id);
    res.status(200).json({ message: "User successfully deleted", user });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE user
export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const user = await updateUserService(id, req.body);
    res.status(200).json({ message: "User successfully updated", user });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};