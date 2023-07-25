import { bookingsController } from "./controllers/booking";
import { loginController } from "./controllers/login";

import authMiddleware from "./middleware/login";
import express from "express";

export const app = express();

app.get('/', (req, res) => {
    res.send('API running on root path');
});

// middlewares
app.use(express.json());

// public routes
app.use("/login", loginController);

// private routes
app.use("/booking", authMiddleware, bookingsController);