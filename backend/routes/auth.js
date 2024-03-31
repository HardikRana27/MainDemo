const express = require("express");
const router = express.Router();

router.get("/uemailcheck/:uemail", (req, res) => {
  // Handler for email check
});

router.get("/uuemailcheck/:uemail", (req, res) => {
  // Another email check handler
});

// Other authentication-related routes

module.exports = router;
