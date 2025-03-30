# MERN Task Manager

## Overview

This project is a full-stack MERN (MongoDB, Express, React, Node.js) Task Manager application built with TypeScript. It demonstrates the integration of a modular backend with a modern, scalable frontend. The project is designed to be easy to understand and maintain, following best practices in both development and organization.

## Backend

The backend is built with Node.js, Express, and MongoDB (using Mongoose). It is organized in a modular fashion:

- **Server Initialization (`src/index.ts`):**

  - Loads environment variables using `dotenv`.
  - Initializes an Express server.
  - Connects to MongoDB before handling requests.
  - Sets up middleware (like JSON parsing) and mounts API routes.

- **Database Connection (`src/config/db.ts`):**

  - Uses Mongoose to connect to MongoDB with a connection string from an environment variable.
  - Centralizes connection logic and handles errors gracefully.

- **Data Modeling (`src/models/Task.ts`):**

  - Defines a Mongoose schema for a Task, including fields such as title, description, and completed status.
  - Automatically manages `createdAt` and `updatedAt` timestamps.
  - Uses a TypeScript interface (`ITask`) for type safety.

- **Business Logic (`src/controllers/taskController.ts`):**

  - Implements CRUD operations (create, read, update, delete) for tasks.
  - Handles errors and sends appropriate HTTP responses.

- **Routing (`src/routes/taskRoutes.ts`):**
  - Maps RESTful API endpoints to the controller functions.
  - Keeps the route definitions modular and maintainable.

## Frontend

The frontend is built with React, Vite, and TypeScript, with Bootstrap for styling. It is organized into a modular folder structure:

- **Entry Point (`src/main.tsx`):**

  - Bootstraps the React application.
  - Imports Bootstrap CSS to ensure a responsive, consistent UI.
  - Renders the main `<App />` component.

- **Application Structure:**

  - **`App.tsx`:**
    Acts as a container that loads the main page component.
  - **Pages (`src/pages/Home.tsx`):**
    - Serves as the main user interface for the Task Manager.
    - Manages state for tasks, filtering, loading, and error notifications.
    - Integrates with the backend API to fetch and update tasks.

- **Components (`src/components/`):**

  - **`TaskInput.tsx`:**
    - Manages user input for adding new tasks.
    - Uses local state for the input field and calls a callback to add tasks.
  - **`TaskList.tsx`:**
    - Renders a list of tasks by delegating to the `TaskItem` component.
  - **`TaskItem.tsx`:**
    - Displays an individual task.
    - Provides options for editing the task title, deleting the task, and toggling its completion status.
    - Manages its own state for edit mode.
  - **`TaskFilter.tsx`:**
    - Offers buttons to filter tasks by their status: all, active, or completed.
    - Updates the filter state in the parent component.

- **Service Layer (`src/services/taskService.ts`):**
  - Encapsulates all API calls to the backend using Axios.
  - Provides functions to fetch, create, update, and delete tasks.
  - Keeps UI components focused on presentation and state management.

## Features

- **CRUD Operations:**
  - Create, read, update, delete, and toggle tasks.
- **Filtering:**
  - Filter tasks by status: all, active, or completed.
- **User Experience Enhancements:**
  - Loading states to indicate data fetching.
  - Error notifications to inform the user of API issues.
  - Responsive design with Bootstrap.

## Setup and Running

### Backend

1. **Install dependencies:**

   ```bash
   cd server
   npm install
   ```

2. **Set up the environment:**

   - Create a `.env` file in the `server` directory with:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

3. **Start the server:**
   ```bash
   npx ts-node-dev src/index.ts
   ```

### Frontend

1. **Install dependencies:**

   ```bash
   cd client
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

## Conclusion

This project serves as a comprehensive example of a full-stack MERN application using TypeScript. It features a well-structured backend and a modular, responsive frontend with essential CRUD operations and user-friendly enhancements. The modular design and clear separation of concerns make the codebase easy to understand, maintain, and scale.

Happy coding!
