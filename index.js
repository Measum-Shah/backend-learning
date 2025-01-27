const express = require('express');
const app = express();

// consider express as a box have many tools , but it is closed . In order to use express tools we have to open box. so we call it as "express()" and store it in const app then this box get open and then we can use every tool as app.tool....
// In express we dont have to use "createserver" the express manage it itself
// Express also uses HTTP at backend

// Keep in mind use of '=,==,===' in js in http server

app.get('/',(req,res)=>{
    res.send("Hello Learner")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/contact',(req,res)=>{
    res.send("contact page")
})


app.listen(3000);


