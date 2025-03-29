import { Router } from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController';

const router = Router();

// Route to get all tasks
router.get('/', getTasks);

// Route to get a specific task by id
router.get('/:id', getTask);

// Route to create a new task
router.post('/', createTask);

// Route to update an existing task by id
router.put('/:id', updateTask);

// Route to delete a task by id
router.delete('/:id', deleteTask);

export default router;
