import express from "express";
import uuid from "react-uuid";
import jwt from "jsonwebtoken";

export const loginService = async (req: express.Request, res: express.Response) => {
  const user = {
    email: "admin@admin.com",
    password: "Admin123",
  };

  const { email, password } = req.body;
  console.log(email, password)

  if ((email === "" || password === "")) {
    res.status(400).json({ error: "Missing user credentials" });

  } else if (user.email !== email || user.password !== password) {
    res.status(401).json({ error: "User credentials don't match" });

  } else{
    const token = jwt.sign({ ...user, id: uuid() }, process.env.TOKEN_SECRET as string);
    res.status(200).json({ auth: true, token });
  }
};

