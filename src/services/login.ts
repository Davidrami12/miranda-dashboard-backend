import express from "express";
import uuid from "react-uuid";
import jwt from "jsonwebtoken";

export const loginService = async (req: express.Request, res: express.Response) => {
  const user = {
    email: "admin@admin.com",
    password: "Admin123",
  };

  const { email, password } = req.body;

  if (user.email !== email || user.password !== password) {
    return res.status(404).send("user doesn't exist");

  } else {
    const token = jwt.sign({ ...user, id: uuid() }, process.env.TOKEN_SECRET as string, {
      expiresIn: 1800,
    });
    
    res.json({ auth: true, token });
  }
};