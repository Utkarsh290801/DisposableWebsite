const mongoose = require('mongoose');
const url = "mongodb+srv://utarora:mansha@cluster0.wmuj9.mongodb.net/DisposableWebsite?retryWrites=true&w=majority"
mongoose.connect(url)
.then(() => {
console.log('connected to database')
}).catch((err) => {
    console.log(err);
    
});
module.exports = mongoose;