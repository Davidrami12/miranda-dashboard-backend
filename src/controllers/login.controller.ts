import express from 'express';
import { loginService } from '../services/login.service';

export const loginRoute = express.Router();

const loginController = async (req: express.Request , res: express.Response) => {
  try {
    const response = await loginService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};


loginRoute.post("/", loginController)