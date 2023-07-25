import authService from "../services/login";
import { NextFunction, Request, Response } from "express";

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Get the jwt token from the headers and verify it
}




/* import { Request, Response, NextFunction } from 'express';

const hardcodedUser = {
    email: 'admin@admin.com',
    password: 'Admin123',
};

export const checkAuthentication = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
        next();
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
};
 */