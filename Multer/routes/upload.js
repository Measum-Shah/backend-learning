import express from "express"
import multer from "multer"

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    return cb(null,"./uploads")
  },
  filename:function(req,file,cb){
    return cb(null,`${Date.now()}-${file.originalname}`)
  },
})

export const uploadRouter = express.Router();
const upload = multer({storage:storage})



uploadRouter.post("/",upload.single("image"),(req,res)=>{
  console.log(req.file)
  return res.redirect("/")

})