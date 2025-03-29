import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import express, { Request, Response } from 'express';

// Create an instance of the Express application
const app = express();

// Define the port using the PORT environment variable from .env; fallback to 5000 if not set
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Define a test route to verify the server is working
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
