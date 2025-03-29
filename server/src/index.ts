import express, { Request, Response } from 'express';
import taskRoutes from './routes/taskRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mount the task routes at /api/tasks
app.use('/api/tasks', taskRoutes);

// Test route to verify the server is running
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
