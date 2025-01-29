const express = require('express');
// const morgan = require('morgan')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render("index.ejs")
})
// app.get('/get-form-data',(req,res)=>{
//     console.log(req.query);
//     // req.query contains all data  in terms of get method
//     res.send("Data Submitted Successfuly")
// })
app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    // req.body contains all data in terms of post method 
    res.send("Data Submitted Successfuly")
})


// The data comes into request.query
// Then response will be give
// Now paste the route in "action" of form in index.ejs
// when we run we get output {} this because we are getting data but data don't have specific identification
// we should name inputs in order to resolve this problem
// After giving name output = { username: 'shazia', email: 'shazia@gmail.com', password: '12345678' }
// The data submitted is sowing in url
// password is senstive info it should not be shown
// if we don't want to show our data in url we will use post route
// post method is generally used to take data from frontend to backend
// get method is generally used to take data from server to frontend
// if we use post method data comes into req.body
// to use post u must specify post method in form
// automatically form detects get method
// Now the output is "undefined"
// it comes because express by default cant read req.body
// in order to resolve this we have to use two express middlewares express.json() and express.urlencoded
// ({extended:true})
// Both these are BUILT IN MIDDLEWARES
// Now The Output is  { username: 'measum', email: 'love uh', password: 'jadfa' }


app.listen(3000);


