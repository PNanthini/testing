const adminController=require("../controller/admincontroller")
const express=require("express")
const Router=express.Router()
Router.route("/create").post(adminController.create)
Router.route("/login").post(adminController.login)




module.exports=Router