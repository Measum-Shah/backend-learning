const express = require('express');
const morgan = require('morgan')
const app = express();


app.use(morgan('dev'))

// Third PArty Middle ware
// we can do this from npmjs.com
// search morgan "LOGGER"
// npm i morgan
// This tells which request comes to your server, when comes to your server, which method request, how much time it take to proceed and many more such things to proceed
// middleware works for all routes



app.set('view engine', 'ejs')

app.use((req,res,next)=>{
    console.log("this is middle ware")
    // res.send("COMSIAN DEV ON TOP")
    return next()
})

// Giving middle ware to specific route
app.get('/',(req,res,next)=>{
    const a = 5;
    const b= 10;
    console.log(a+b);
    next()

    // should write next()
    // to proceed completey and have respone
    // We dont pass response to middleware
},(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/contact',(req,res)=>{
    res.send("contact page")
})

// output for simple /
// this is middle ware
// Request,route,time
// GET / 304 68.430 ms - -
// So in this way this middlework works



// output for /about
// this is middle ware
// this is middle ware
// GET /about 304 27.692 ms
// So in this way this middlework works

app.listen(3000);


