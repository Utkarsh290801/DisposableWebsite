const { Schema, model } = require("../connection");

const myschema = new Schema({
  name: String,
  designation:String,
  review: String,
  createdAt: { type: Date, default: new Date() },
 
});

module.exports = model("testimonialcollection", myschema);