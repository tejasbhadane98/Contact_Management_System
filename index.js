const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongodb = require("mongodb")
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Contact_Manager").then(()=>{
    console.log("Connected to the Database");
})

const user = require("./routes/user")
app.use(user)

app.listen(3000,()=>{
    console.log("Server is listening at port no 3000");
})