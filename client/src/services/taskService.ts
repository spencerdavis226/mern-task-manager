import axios from 'axios';

// Define the base URL for the tasks API.
// Adjust the URL as needed (e.g., if using a proxy or environment variable)
const API_URL = 'http://localhost:5001/api/tasks';

interface TaskUpdateData {
  title?: string;
  description?: string;
  completed?: boolean;
}

// Fetch all tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create a new task (we send only the title; adjust as needed)
export const createTask = async (task: string) => {
  const response = await axios.post(API_URL, { title: task });
  return response.data;
};

// Update an existing task by its ID
export const updateTask = async (
  taskId: string,
  updatedData: TaskUpdateData
) => {
  const response = await axios.put(`${API_URL}/${taskId}`, updatedData);
  return response.data;
};

// Delete a task by its ID
export const deleteTask = async (taskId: string) => {
  const response = await axios.delete(`${API_URL}/${taskId}`);
  return response.data;
};
