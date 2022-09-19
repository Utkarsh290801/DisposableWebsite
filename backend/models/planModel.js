const { Schema, model,Types} = require('../connection');

const myschema = new Schema({
    plan: Object,
    user: { type: Types.ObjectId, ref: "usercollection" },
    createdAt: { type: Date, default: new Date() },
    expired: { type: Boolean, default: false },
    
  
});
module.exports = model('plancollection', myschema);