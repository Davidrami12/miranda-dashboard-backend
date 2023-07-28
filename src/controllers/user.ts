import express from "express";
import { UserInterface } from "../models/User";
import { deleteUserService, getUserService, getUsersService, postUserService, updateUserService } from "../services/user";

//GET all users
export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getUsersService(req, res);
    res.status(200).json(JSON.parse(response));
    
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//GET user by id
export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getUserService(req, res);
    res.status(200).json(response);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//POST new User
export const postUser = async (req: express.Request<{},{},UserInterface> , res: express.Response) => {
  try {
    const response = await postUserService(req, res);
    res.status(200).json(response);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE user
export const deleteUser = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    const response = await deleteUserService(req, res);
    res.status(200).json(response);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE user
export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const response = await updateUserService(req, res);
    res.status(200).json(response);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};