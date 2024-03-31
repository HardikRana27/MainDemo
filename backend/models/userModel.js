const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  userage: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  uemail: {
    type: String,
    required: true,
    unique: true,
  },
  userpass: {
    type: String,
    required: true,
  },
  pack: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  isbath: {
    type: Boolean,
    default: false,
  },
  isdietplan: {
    type: Boolean,
    default: false,
  },
  istrain: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
