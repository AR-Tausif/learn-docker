import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user-route.js';

dotenv.config()

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());  // Add this line to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));  // Add this line to parse URL-encoded bodies

// Define the port
const port = 5000;

// Middleware to use routes
app.use("/users", userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send("Hello world");
});

// 404 route handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: "Route not found",
    data: null
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    status: false,
    message: "Something went wrong",
    data: null,
    error: err.message || err
  });
});

// Export the app for use in other files
export default app;
