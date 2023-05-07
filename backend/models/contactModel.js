const { Schema, model } = require("../connection");

const myschema = new Schema({
  name: String,
  mobile: Number,
  email: String,
  subject: String,
  message: String,
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: new Date() },
  comment: {
    type: String,
    // required: true,
  },
});

module.exports = model("contactcollection", myschema);
