const express = require('express');
const app = express();

// Rendering html 
// 1st download ejs using "npm i ejs"
// set view engine
// create views folder
// make index.ejs in views folder
// now use res.render instead of res.send
// enter file name into "" q.m

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/contact',(req,res)=>{
    res.send("contact page")
})


app.listen(3000);


