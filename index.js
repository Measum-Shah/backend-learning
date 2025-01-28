const express = require('express');
const app = express();

// Middle ware
// if any request come to route, it should go through a function and then to route
// you can use it as app.use((req,res,next)=>{
    // write function here })


app.set('view engine', 'ejs')

app.use((req,res,next)=>{
    console.log("this is middle ware")
    // res.send("COMSIAN DEV ON TOP")
    return next()
})
// output will be this is middleware whenever req pass through routes
// you have to declare response 
// should have return next() to convert to next function
// only one response can be generated

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


