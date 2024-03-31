// jwtMiddleware.js

const jwt = require("jsonwebtoken");

// Middleware function to verify JWT tokens
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, "SECRET_TOKEN", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }

    // If token is valid, save decoded token data in request for further use
    req.user = decoded;
    next();
  });
};

module.exports = { verifyToken };
