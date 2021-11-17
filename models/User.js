const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  Username: { type: String, default: null, unique:true },
  Password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);