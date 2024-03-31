const Admin = require("../models/adminModel");

// Function to register a new admin
exports.registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = new Admin({ username, password });
    await admin.save();
    res.status(201).json({ message: "Admin registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register admin." });
  }
};

// Function to authenticate admin
exports.authenticateAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      res.status(200).json({ message: "Admin authenticated successfully!" });
    } else {
      res
        .status(401)
        .json({ error: "Authentication failed. Invalid credentials." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to authenticate admin." });
  }
};

// Function to retrieve all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve admins." });
  }
};

// Function to delete an admin
exports.deleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    await Admin.findByIdAndDelete(adminId);
    res.status(200).json({ message: "Admin deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete admin." });
  }
};
