const express = require('express');
// const morgan = require('morgan')
const app = express();

app.use(express.static("public"));
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

// Now we will attach css file with our backend
// first make a public folder
// as we have created index.css so we have to request one more file along with ejs
// Static files are files which user can access witout any authentication
// for this use app.use(express.static("folder name"))
// Now add link tag in ejs to css file
// run server and boom you have black background
// similarly you can connect js file for frontend with backend 
// mmake index.js in pblic folder add script tag in ejs
// and boom you can use js file
// in this way we can render static files such as css and js

app.listen(3000);


