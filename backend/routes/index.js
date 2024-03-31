const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Index Page");
  res.send("<h1>Welcome to Express</h1>");
});

module.exports = router;
