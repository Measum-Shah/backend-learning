const mongoose = require('mongoose');

const connection =  mongoose.connect(
    // 1st give path to mongodb db
    'mongodb://127.0.0.1:27017/Example'
).then(
    // It will perform after connect () function
    console.log("conected to database")
)


// moongose.connect connects your application with database moreover it returns the connection also 
// this connection is between nodejs and mongodb
// now wel will export it and import in index.js

module.exports = connection;