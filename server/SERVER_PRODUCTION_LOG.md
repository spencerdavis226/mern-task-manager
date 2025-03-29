# Backend Architecture Overview

## 1. Main Server Setup (`index.ts`)

**What We Did:**

- **Environment Variables:** Loaded via `dotenv` to securely manage sensitive information (e.g., MongoDB URI).
- **Express Initialization:** Created an Express app to handle incoming HTTP requests.
- **Middleware:** Added JSON parsing middleware (`express.json()`) to automatically convert incoming JSON data to JavaScript objects.
- **Database Connection:** Called a separate `connectDB` function (from `db.ts`) to connect to MongoDB before starting the server.
- **Routing:** Mounted task-related routes under `/api/tasks` for a modular API structure.
- **Test Route & Server Start:** Added a simple test route and started the server on a specified port.

**Thought Process:**

- **Modularity & Clarity:** Keeping the main server file lean by delegating tasks (like DB connection and routing) to separate modules.
- **Error Prevention:** Ensuring the database is connected before handling requests prevents the app from running in an error state.
- **Scalability:** A clean, modular structure makes it easier to add new features and middleware in the future.

## 2. Database Connection (`db.ts`)

**What We Did:**

- **Mongoose Connection:** Created a `connectDB` function to connect to MongoDB using Mongoose and the connection string from the `.env` file.
- **Error Handling:** Wrapped the connection attempt in a try-catch block to log errors and exit the process if the connection fails.

**Thought Process:**

- **Centralization:** Centralizing the connection logic in one file makes maintenance and future updates easier.
- **Robustness:** Proper error handling ensures the app doesn't run in a faulty state if the database connection fails.

## 3. Data Modeling (`Task.ts`)

**What We Did:**

- **Mongoose Schema:** Defined a schema for a Task with fields like `title`, `description`, and `completed`, along with automatic timestamps (`createdAt` and `updatedAt`).
- **TypeScript Interface:** Created an `ITask` interface to enforce type safety and consistency in our data.
- **Model Export:** Exported the Task model for use in other parts of the backend.

**Thought Process:**

- **Data Consistency:** Ensures every Task document in MongoDB adheres to the same structure.
- **Type Safety:** Reduces runtime errors by catching type mismatches during development.
- **Maintainability:** Centralizing data schema makes it easier to update the structure as the application evolves.

## 4. Business Logic and CRUD Operations (`taskController.ts`)

**What We Did:**

- **CRUD Functions:** Implemented functions to get all tasks, get a single task, create, update, and delete tasks.
- **Async/Await & Error Handling:** Used async/await with try-catch blocks to handle asynchronous operations and errors gracefully.
- **Response Handling:** Sent appropriate HTTP status codes (e.g., 404 for not found, 201 for creation) and messages based on the operation outcome.

**Thought Process:**

- **Separation of Concerns:** Isolating business logic (data operations) from routing helps keep the code organized and testable.
- **Reusability:** Controller functions can be reused across different routes if needed.
- **User Feedback:** Proper error handling and status codes ensure the client receives clear information on the result of their requests.

## 5. Routing (`taskRoutes.ts`)

**What We Did:**

- **Express Router:** Created a router to define and handle API endpoints for task operations.
- **Mapping Endpoints to Controllers:** Mapped RESTful endpoints (GET, POST, PUT, DELETE) to the corresponding controller functions.
- **Exporting the Router:** Exported the router so it can be easily integrated into the main server file.

**Thought Process:**

- **Modularity:** Separating routing into its own file keeps the main server file clean and makes it easier to manage endpoints.
- **RESTful API Design:** Using standard REST conventions makes the API predictable and easy to understand.
- **Scalability:** A modular routing structure allows for easy addition of new routes and features as the project grows.

## Overall Mindset

- **Separation of Concerns:** Each part of the backend (server setup, DB connection, data modeling, business logic, and routing) has a single responsibility, which enhances maintainability and scalability.
- **Type Safety & Reliability:** Leveraging TypeScript throughout helps catch errors early and ensures consistency in data structures and function signatures.
- **Incremental Development:** Clear, incremental Git commits and modular design make it easier to track changes and understand the evolution of the project.
- **Testing & Verification:** Using logging, test routes, and proper error handling ensures that each component works correctly before moving to the next.

This log serves as a reference for the design and thought process behind the backend architecture of the MERN stack project.
