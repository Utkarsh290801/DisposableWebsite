const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.dbUrl;
mongoose
  .connect(url)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose;
