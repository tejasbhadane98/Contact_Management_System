const express = require("express");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName:{
        type:String, 
        required:true
    },
    lastName:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        required:true,
        unique:true
    },
    phone:{
        type:Number, 
        required:true,
        unique:true
    }

})

let User = mongoose.model("users", UserSchema);
module.exports = User