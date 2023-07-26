import express from "express";
import dotenv from 'dotenv'
dotenv.config()

import { bookingRoutes } from './routes/bookings'
import { authenticateToken } from './middleware/login';
import { loginRoutes } from './controllers/login';

export const app = express();
export const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('API running on root path');
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public routes
app.use('/login', loginRoutes);

// private routes
app.use('/bookings', authenticateToken, bookingRoutes);
// app.use('/rooms', authenticateToken, roomRoutes);