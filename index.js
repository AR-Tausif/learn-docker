const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/user-route.js');

const app = express();
app.use(cors());

// Define the port
const port = 5000;

// Middleware to use routes
app.use("/users", userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send("Hello world");
});

// Export the app for use in other files
module.exports = app;
