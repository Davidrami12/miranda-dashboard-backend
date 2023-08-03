import express from "express";
import serverless from 'serverless-http';
import dotenv from 'dotenv'
dotenv.config()

// Import db connection and data generator
import { connection } from "./connection"
import { seedDatabase } from "./seedDatabase";

// Import auth middleware for private routes
import { authenticateToken } from './middleware/auth';

// Import routes
import { loginRoutes } from './controllers/login';
import { bookingRoutes } from './routes/bookings'
import { roomRoutes } from './routes/rooms';
import { userRoutes } from './routes/users';
import { contactRoutes } from './routes/contact';
import { infoController } from "./controllers/information";

export const app = express();

// Connect to database and generate random data
connection().then(seedDatabase).catch(console.error);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public routes
app.get('/', (req, res) => {
    res.send('API running on root path');
});
app.use('/info', infoController);
app.use('/login', loginRoutes);

// Private routes with authenticate token
app.use('/bookings', authenticateToken, bookingRoutes);
app.use('/rooms', authenticateToken, roomRoutes);
app.use('/users', authenticateToken, userRoutes);
app.use('/contacts', authenticateToken, contactRoutes);

export const handler = serverless(app);