const mongoose = require("mongoose");

const user = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", user);
