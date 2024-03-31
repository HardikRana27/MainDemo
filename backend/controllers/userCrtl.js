const mongodb = require("mongodb");

// Function to register a user
const registerUser = (req, res) => {
  req.body._id = new Date().getTime();
  db.collection("users").insertOne(req.body, (error, data) => {
    if (error) {
      res.status(403).json("Error in Inserting Doc");
    } else {
      res.json("User Registered Successfully!");
    }
  });
};

// Function to login a user
const loginUser = (req, res) => {
  db.collection("users")
    .find(req.body, {
      projection: { _id: 1, Fname: 1, lname: 1, userage: 1, gender: 1 },
    })
    .toArray((error, data) => {
      if (error) {
        res.status(403).json("Error");
      } else {
        res.json(data);
      }
    });
};

// Function to get all users
const getAllUsers = (req, res) => {
  db.collection("users")
    .find(null, { projection: { userpass: 0 } })
    .toArray((error, data) => {
      if (error) {
        res.status(403).json("Error in Finding the Doc");
      } else {
        res.json(data);
      }
    });
};

// Function to check if the email exists
const checkEmail = (req, res) => {
  db.collection("users")
    .find({ uemail: req.params.uemail }, { projection: { _id: 1 } })
    .toArray((error, data) => {
      if (error) {
        res.status(403).json("Error in Finding the Doc");
      } else {
        res.json(data);
      }
    });
};

// Function to get a user by ID
const getUserByID = (req, res) => {
  db.collection("users")
    .find({ _id: Number(req.params.userid) })
    .toArray((error, data) => {
      if (error) {
        res.status(403).json("Error in Finding the Doc");
      } else {
        res.json(data);
      }
    });
};

// Function to update user information
const updateUser = (req, res) => {
  var condition = { _id: req.body._id };
  var newValues = {
    $set: {
      Fname: req.body.Fname,
      lname: req.body.lname,
      userage: req.body.userage,
      uemail: req.body.uemail,
      level: req.body.level,
      gender: req.body.gender,
      pack: req.body.pack,
      isbath: req.body.isbath,
      isdietplan: req.body.isdietplan,
      istrain: req.body.istrain,
      date: req.body.date,
    },
  };

  db.collection("users").update(condition, newValues, (error, data) => {
    if (error) {
      res.status(403).json("Error in Finding the Doc");
    } else {
      res.json("User data updated successfully");
    }
  });
};

// Function to delete a user by ID
const deleteUserByID = (req, res) => {
  db.collection("users").deleteOne(
    { _id: Number(req.params.userid) },
    (error, data) => {
      if (error) {
        res.status(403).json("Error in Finding the Doc");
      } else {
        res.json("User deleted successfully");
      }
    }
  );
};

// Function to search users by name
const searchUsersByName = (req, res) => {
  if (req.params.searchtxt != undefined) {
    var search = new RegExp(req.params.searchtxt, "i");
    var searchCond = { Fname: search };
  } else {
    var searchCond = null;
  }

  db.collection("users")
    .find(searchCond)
    .toArray((error, data) => {
      res.json(data);
    });
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  checkEmail,
  getUserByID,
  updateUser,
  deleteUserByID,
  searchUsersByName,
};
