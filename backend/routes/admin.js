const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Route to register a new admin
router.post("/register", adminController.registerAdmin);

// Route to authenticate an admin
router.post("/login", adminController.authenticateAdmin);

// Route to retrieve all admins
router.get("/all", adminController.getAllAdmins);

// Route to delete an admin
router.delete("/delete/:id", adminController.deleteAdmin);

module.exports = router;
