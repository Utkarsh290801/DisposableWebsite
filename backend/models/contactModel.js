const { Schema,model} = require('../connection');

const myschema = new Schema({
  name: String,
  mobile: Number,
  email: String,
  subject: String,
  message: String,
   createdAt: { type: Date, default: new Date() },
  
});

module.exports=model("contactcollection", myschema);
