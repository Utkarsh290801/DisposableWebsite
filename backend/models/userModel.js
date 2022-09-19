const { Schema, model } = require("../connection");

const myschema = new Schema({
  username: String,
  email: String,
  password: String,
  newPassword: String,
  confirmPassword: String,
  avatar: String,
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
});
module.exports = model("usercollection", myschema);
