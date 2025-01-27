const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url=="/about"){
        res.end("About page")
    }
    if(req.url=="/"){
        res.end("Home Page")
    }
    if(req.url=="/contact"){
        res.end("03xxxx")}
})

server.listen(3000)


