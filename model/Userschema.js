
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "enter a name"]
    },
    email: {
        type: String,
        require: [true, "enter the email"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "enter the password"]
    },
    mobileno: {
        type: Number,
        require: true,
        min: [10, 'mobileNumber cannot exceed 500 characters']
    },
    dateofbirth: {
        type: Date,
        require: [true, "enter the dateofBirth"]
    },
    Gender: {
        type: String,
        enum: ["male", "female", "others"],
        require: [true, "Select the Gender "]
    },
    maritalStatus: {
        type: String,
        enum: ["married", "single"],

    },
    role: {
        type: String,
        enum: ["admin", "employee"],
        default: "employee"

    },
    employeeId:{
        type:Number,
       
    },
    status:{
        type: String,
     default:"active"
    }



})
module.exports = mongoose.model("User",UserSchema)