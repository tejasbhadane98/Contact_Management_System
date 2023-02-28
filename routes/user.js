const express = require("express");
const router = express.Router();
const User = require("../models/User")

router.post("/v1/contacts", async(req,res)=>{
    try{
        // console.log("hii");
        let user = await User.create({...req.body})
        // console.log(user);
        res.status(201).json({user})
    }
    catch(error){
        res.json({error})
    }
})

router.get("/v1/contacts", async(req,res)=>{
    try{
        // console.log("hii");
        let user = await User.find()
        // console.log(user);
        res.status(200).json({user})
    }
    catch(error){
        res.json({error})
    }
})

router.get("/v1/contacts/:id", async(req,res)=>{
    try{
        
        let user = await User.find({_id:req.params.id})
        // console.log(user);
        res.status(200).json({user})
    }
    catch(error){
        res.status(404).json({error:"There is no contact with that id"})
    }
})

router.delete("/v1/contacts/:id", async(req,res)=>{
    try{
        
        let user = await User.findByIdAndDelete({_id:req.params.id})
        console.log(user);
        res.status(204).json( {message:"Deleated by ID"})
    }
    catch(error){
        res.status(404).json({error:"There is no contact with that id"})
    }
})


router.put("/v1/contacts/:id", async(req,res)=>{
    try{
        
        let user = await User.updateOne({_id:req.params.id},{$set:{phone:req.body.phone}})
        console.log(user);
        res.status(204).json({user})
    }
    catch(error){
        res.status(404).json({error:"There is no contact with that id"})
    }
})


router.patch("/v1/contacts/:id", async(req,res)=>{
    try{
        
        let user = await User.updateOne({_id:req.params.id},req.body)
        // console.log(user);
        // let upadateContact = req.body;
        // let id = req.params.id;
        res.status(204).send("")
        
        // res.status(204).json({user})
    }
    catch(error){
        res.status(404).json({error:"There is no contact with that id"})
    }
})

module.exports = router