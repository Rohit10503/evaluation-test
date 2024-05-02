const express = require("express")
const app=express()
const cors =require("cors")
app.use(express.urlencoded({extended:false}))
const multer = require('multer');
app.use(cors())


const storage=multer.diskStorage({
    destination:function(req,file,cb){
         cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        cb(null,`${file.originalname}`)          //file.originalname
    }
})

const upload=multer({storage})
var multipleUpload=upload.fields([{name:'file1'},{name:'file2'}])


app.post("/api/upload",multipleUpload,(req,res)=>{               //upload.single('file')
    res.send({"Name": "Hello"})
    // console.log(req.body)
    // console.log(req.file)
    
})

app.listen(process.env.PORT || 8000,()=>{
    console.log("Server is running on port 5000")
})
