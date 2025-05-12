import express from "express";
import { staticRouter } from "./routes/static.js";
import { uploadRouter } from "./routes/upload.js";
import path from "path"
const app = express()



// middle wares
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.listen(8000,()=>{
  console.log("server is running")
})

// routes
app.use("/",staticRouter)
app.use("/upload",uploadRouter)


