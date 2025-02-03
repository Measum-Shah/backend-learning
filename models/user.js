const mongoose = require('mongoose')

const userScehema = new mongoose.Schema({
    // This function will need an object to work
    // we will tell type of data coming

    username: String,
    email: String,
    age : Number,
    Password : String,
    gender : {
        type:String,
        // It can have two values male and female so:
        enum:['male',]
    }
})


// now to implement this scheema you have to use one more function

const userModel = mongoose.model(
    // You have to tell two things in this Name of model and from which schema it will be made
    'user',userScehema
)

// module.exports.userModel;

module.exports = userModel;
// Now import into index.js
