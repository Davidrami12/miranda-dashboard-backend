import express from "express";
import uuid from "react-uuid";
import jwt from "jsonwebtoken";

export const loginService = async (req: express.Request, res: express.Response) => {
  const user = {
    email: "admin@admin.com",
    password: "Admin123",
  };

  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Missing user credentials");
  }

  if (user.email !== email || user.password !== password) {
    throw new Error("User credentials doesn't match");
  }

  const token = jwt.sign({ ...user, id: uuid() }, process.env.TOKEN_SECRET as string);
  return { auth: true, token };
};
