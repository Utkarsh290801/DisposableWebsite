const { Schema, model,Types } = require('../connection');

const myschema = new Schema({

    file: String,
    user: { type: Types.ObjectId, ref: "usercollection" },
  
});
module.exports = model('assetcollection', myschema);