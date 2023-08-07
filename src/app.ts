import express from "express";
import serverless from 'serverless-http';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Import db connection and data generator
import { connection } from "./mongodb/connection";
import { seedDatabase } from "./mongodb/seedDatabase";

// Import auth middleware for private routes
import { authenticateToken } from './middleware/auth';

// Import routes
import { loginRoute } from './controllers/login.controller';
import { bookingRoutes } from './routes/booking.routes'
import { roomRoutes } from './routes/room.routes';
import { userRoutes } from './routes/user.routes';
import { contactRoutes } from './routes/contact.routes';
import { infoController } from "./controllers/information.controller";

export const app = express();

// Connect to database and generate random data
connection();

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public routes
app.get('/', (req, res) => {
    res.send('API running on root path');
});
app.use('/info', infoController);
app.use('/login', loginRoute);

// Private routes with authenticate token
app.use('/bookings', authenticateToken, bookingRoutes);
app.use('/rooms', authenticateToken, roomRoutes);
app.use('/users', authenticateToken, userRoutes);
app.use('/contacts', authenticateToken, contactRoutes);

export const handler = serverless(app);