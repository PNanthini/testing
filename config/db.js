const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URL)
.then((req,res)=>{
    console.log("database is connect")
}).catch((err)=>{
    console.log(err)
})