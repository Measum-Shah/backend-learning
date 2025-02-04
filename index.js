const express = require('express');
// const morgan = require('morgan')
const app = express();
const userModel = require('./models/user')
const connection = require('./config/db')
 

// Now we will read crud operations
// we have seen create 
// now will see read method
// we have two methods 
// 1st one is given below

app.get('/get-users',(req,res)=>{
    userModel.find(
        // this method will return all users and return it in then 
        // we can also apply condition here
        // {username:'meadu'}
        // it always return an array whether its empty or not
    ).then((users)=>{
        res.send(users);
        // Now this will give data of all users we have
    })

})

// 2nd one is given below
// it only gives one entry
// it gives null when condition don't satisfies
// but find ()gives empty array
app.get('/get-user',(req,res)=>{
    userModel.findOne({
        username:'meadu',
    }).then(
        (user)=>{
            res.send(user)
        }
    )
  
})

app.get('/update-user',async(req,res)=>{
    // Before updating any user we find it then update it
    // for this we have a method :
    // this fnction is asynchronous so we will use async and await

    await userModel.findOneAndUpdate({
        username:'meadu',
        // this will find
    },{
        email:'measum',
        // this will update
    })

    res.send("User Updated");
})

// similarly we will perform delete operation
app.get('/delete',async (req,res)=>{
    await userModel.findOneAndDelete({
        username:'meadu'
    })
    res.send("USER DELETED")
    // The user will be deleted in db
})


 




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


