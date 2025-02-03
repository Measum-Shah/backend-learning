const express = require('express');
// const morgan = require('morgan')
const app = express();
const userModel = require('./models/user')
const connection = require('./config/db')
 

// Now we will install mongoose by npm i mongoose
// Then Create Folder of models
// 1st we will create user schema
//now go in user.js file
// we import user model
// after importing we can perform crud operations so 1st we have to made database connection 1st
// 1st create config folder
// create a file db.js 
// now go in db.js file
// we imported connection
// now we can see in composs exapmle database has a collection user


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send("Data Submitted Successfuly")
})

app.listen(3000);


