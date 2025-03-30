import React, { useEffect, useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import {
  getTasks,
  createTask,
  deleteTask as deleteTaskAPI,
  updateTask as updateTaskAPI,
} from '../services/taskService';

interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load tasks from the backend
  const loadTasks = async () => {
    setLoading(true);
    try {
      const data: Task[] = await getTasks();
      setTasks(data);
      setError(null);
    } catch (error) {
      console.error('Failed to load tasks:', error);
      setError('Failed to load tasks.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  // Add a new task via the backend API
  const addTask = async (task: string) => {
    try {
      const newTask: Task = await createTask(task);
      setTasks([...tasks, newTask]);
      setError(null);
    } catch (error) {
      console.error('Failed to create task:', error);
      setError('Failed to create task.');
    }
  };

  // Delete a task via the backend API
  const handleDelete = async (id: string) => {
    try {
      await deleteTaskAPI(id);
      setTasks(tasks.filter((task) => task._id !== id));
      setError(null);
    } catch (error) {
      console.error('Failed to delete task:', error);
      setError('Failed to delete task.');
    }
  };

  // Update a task's title via the backend API
  const handleUpdate = async (id: string, newTitle: string) => {
    try {
      const updatedTask: Task = await updateTaskAPI(id, { title: newTitle });
      setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
      setError(null);
    } catch (error) {
      console.error('Failed to update task:', error);
      setError('Failed to update task.');
    }
  };

  // Toggle a task's completion status via the backend API
  const handleToggleComplete = async (id: string, newStatus: boolean) => {
    try {
      const updatedTask: Task = await updateTaskAPI(id, {
        completed: newStatus,
      });
      setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
      setError(null);
    } catch (error) {
      console.error('Failed to toggle task completion:', error);
      setError('Failed to toggle task completion.');
    }
  };

  // Update the current filter
  const handleFilterChange = (newFilter: 'all' | 'active' | 'completed') => {
    setFilter(newFilter);
  };

  // Filter tasks based on the current filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed;
    }
    if (filter === 'completed') {
      return task.completed;
    }
    return true; // 'all'
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task Manager</h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <TaskInput addTask={addTask} />
      <TaskFilter currentFilter={filter} onFilterChange={handleFilterChange} />
      {loading ? (
        <div>Loading tasks...</div>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onToggleComplete={handleToggleComplete}
        />
      )}
    </div>
  );
};

export default Home;
