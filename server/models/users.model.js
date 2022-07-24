const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    requireed: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Testusers", UsersSchema);

module.exports = Users;
