import express from "express";
import dotenv from 'dotenv'
dotenv.config()

import { bookingRoutes } from './routes/bookings'
import { authenticateToken } from './middleware/login';
import { loginRoutes } from './controllers/login';

export const app = express();
export const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('API running on root path');
});

// middleware
app.use(express.json());
app.use('/api/login', loginRoutes);

// public routes
//app.use('/api/info', infoRoute)

// private routes
app.use('/api/bookings', authenticateToken, bookingRoutes);
// app.use('/api/rooms', authenticateToken, roomRoutes);