const { Schema, model,Types} = require('../connection');

const myschema = new Schema({
    title: String,
    plan: Object,
    user: { type: Types.ObjectId, ref: "usercollection" },
    createdAt: { type: Date, default: new Date() },
    expired: Boolean,
    validity:Date
  
});
module.exports = model('plancollection', myschema);