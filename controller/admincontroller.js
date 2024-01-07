const User = require("../model/Userschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");

exports.create = async (req, res) => {
  const {
    name,
    email,
    mobileno,
    password,
    dateofbirth,
    martialStatus,
    role,
    Gender,
    employeId,
  } = req.body;

  try {
    User.findOne({ email }).then(async(user)=>{ if (!user) {
      const hashPassword = await bcrypt.hash(password, 10);

       User.create({
        name: name,
        email: email,
        password: hashPassword,
        mobileno: mobileno,
        dateofbirth: dateofbirth,
        martialStatus: martialStatus,
        role: role,
        Gender: Gender,
        employeId: employeId,
       
      });

      res.status(200).json({ msg: "User created successfully", status: "active" });
    } else {
      res.status(403).json({ msg: "User already exists" });
    }}).catch((err)=>{
      res.send(err)
    })

   
  } catch (err) {
    res.status(500).send(err);
  }
};







// login controller



exports.login=async(req,res)=>{
  try {
    const {email,password}=req.body
    User.findOne({email}).then(async (user)=>{
      
     var verify= await bcrypt.compare(password,user.password)
    
     if(verify === false){
      res.send("Check your Password")
     }else{
      
       var token= jwt.sign(user.email,process.env.SECRET)
       res.status(200).json({msg:"Login sucessFully",token:token})
     }
     
      }).catch((err)=>{
        res.status(400).send("User not found ")
      })
    
  } catch (error) {
    res.send(error)
  }
 
}