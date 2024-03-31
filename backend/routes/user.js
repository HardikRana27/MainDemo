const express = require("express");
const { verifyToken } = require("../middleware/jwtMiddleware");
const router = express.Router();
const mongoose = require("mongoose");
const { verifyToken } = require("../middleware/jwtMiddleware");

// Initialize MongoDB connection
// Moved from app.js

router.post("/register", (req, res) => {
  // Handler for user registration
});

router.post("/login", verifyToken, (req, res) => {
  // Handler for user login
});

router.get("/allusers", (req, res) => {
  // Handler to get all users
});

// Other user-related routes

module.exports = router;
