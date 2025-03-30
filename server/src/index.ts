import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express, { Request, Response } from 'express';
import taskRoutes from './routes/taskRoutes';
import connectDB from './config/db';
import cors from 'cors';

// Create an instance of the Express application
const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
connectDB();

// Define the port using the PORT environment variable from .env; fallback to 5000 if not set
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Mount the task routes at /api/tasks
app.use('/api/tasks', taskRoutes);

// Define a test route to verify the server is working
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
