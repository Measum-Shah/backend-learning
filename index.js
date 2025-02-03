const express = require('express');
// const morgan = require('morgan')
const app = express();
const userModel = require('./models/user')
const connection = require('./config/db')
 

// Now we will see how can we register or create a user
// 1st we will take data from frontend to backend
// Then we will send this data to server
// to do this we will creeate a route /register
// we create a form in register.ejs
// we create action of form as '/register'
// VIPPPPPP now understand one thing we created one router /register down here using get method used to show page and /register in form action to get by using post method
// so we can make two routtes of same name wth differnet methods
// now we destruct data from request.body in user routes
// now we need model to store data
// we create user by usermodel by using create method

 




app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs')
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send("Data Submitted Successfuly")
})

app.get('/register',(req,res)=>{
    res.render('register')
    // now will create a file in views named as register.ejs
})

app.post('/register',async(req,res)=>{
    console.log(req.body);
    // when using post data comes in req.body
    // res.send("User Registered") a dummy response
    // as we can see in console we have username password and email coming from req.body so we will extract it
    const {username,email,password} = req.body; //by destructing
    const userDetails = await userModel.create({
        // we give dta in form of object
        username:username,
        email:email,
        password:password,
// this code will work but this is a ashynchronous function so the code will work in a que or line and complete code is executed but we want that untill user is registered dont send any response
// we can made this synchronous by using async and await
// in order to have user details we can save it in any variable such as userDetails
    })

    res.send(`user Registered : ${userDetails}`);

})

// After all this process user is registered in user collection of example database
// after saving data in userdetail variable we have two things extra v and id
// _id is created by mongoose by default to uniquely identify objects

app.listen(3000);


