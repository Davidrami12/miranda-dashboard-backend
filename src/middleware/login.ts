import { Request as ExpressRequest, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface Request extends ExpressRequest {
  user?: any;
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({
      auth: false,
      message: 'No token provided'
    });
  }

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    if (err) {
      console.log(err);
      return res.status(403).json({
        auth: false,
        message: 'Token is not valid'
      });
    }

    req.user = user;
    next();
  });
}
