import express from 'express';
import cors from "cors";

import welcomeRoutes from './routes/welcomeRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}

app.use(cors(corsOptions));

// Configure middlewares
app.use(express.json());

// Configure routes
app.use('/', welcomeRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

export default app