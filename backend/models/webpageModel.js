const { Schema, model,Types} = require('../connection');

const myschema = new Schema({
 
  title: String,
  description: String,
  type: String,
  data:Object,
  forms: Array,
  disposed:Boolean,
  user:{type:Types.ObjectId,ref:"usercollection"}

});
module.exports = model('webpagecollection', myschema);