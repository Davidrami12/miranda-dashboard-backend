import express from 'express';
import { loginService } from '../services/login.service';

export const loginRoute = express.Router();

const loginController = async (req: express.Request , res: express.Response) => {
  try {
    const response = await loginService(req, res);
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ error: error.message });
  } 
};


loginRoute.post("/", loginController)