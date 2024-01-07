require('dotenv').config()
const express =require("express");
const app=express()
const db=require("./config/db")
const bodyparser=require('body-parser');
const Router=require("./Router/adminRouter")
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
db
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
app.use("/",Router)

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server started at ${process.env.PORT}`)
})


// mongoose.connect(PORT,`$Successfully connected`)