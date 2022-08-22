const { Schema, model} = require('../connection');

const myschema = new Schema({
 
  username: String,
  email: String,
  password: String,
  confirmPassword:String,
  avatar: String,
  createdAt: { type: Date, default: new Date() },
});
module.exports = model('usercollection', myschema);