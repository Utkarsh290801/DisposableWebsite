const mongoose = require('mongoose');
const api_config = require('./config');

const url = api_config.dbUrl;
mongoose.connect(url)
.then(() => {
console.log('connected to database')
}).catch((err) => {
    console.log(err);
    
});
module.exports = mongoose;