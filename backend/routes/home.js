const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Home Page");
  var data = { a: "hi", b: "hello" };
  res.json(data);
});

module.exports = router;
