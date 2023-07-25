import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401).json({
    auth: false,
    message: 'No token provided'
  })

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    next();
  })
}