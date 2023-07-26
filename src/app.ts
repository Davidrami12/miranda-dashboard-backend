import express from "express";
import dotenv from 'dotenv'
dotenv.config()

// Import auth middleware for private routes
import { authenticateToken } from './middleware/login';

// Import routes
import { loginRoutes } from './controllers/login';
import { bookingRoutes } from './routes/bookings'
import { roomRoutes } from './routes/rooms';

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
app.use('/rooms', authenticateToken, roomRoutes);