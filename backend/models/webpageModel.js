const { Schema, model, Types } = require("../connection");

const myschema = new Schema({
  title: {type: String,default:"My Webpage"},
  description: {type: String,default:"Edit Description"},
  type: {type: String,default:"unspecified"},
  data: { type: Object, default: null },
  forms: Array,
  disposed: Boolean,
  user: { type: Types.ObjectId, ref: "usercollection" },
});
module.exports = model("webpagecollection", myschema);
