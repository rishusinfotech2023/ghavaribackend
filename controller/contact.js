const express = require("express");
const Router = express.Router();
const contact= require('../module/contact.module');

const validator = require('validator');

exports.contact =async( req,res)=>{

    const {name,number,email,message}= req.body;
    if(!name || !number || !email || !message){
        return res.status(400).json({message:'All fields are require'});    
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
    
      // Additional validation for name (letters and spaces only)
      if (!validator.isAlpha(name.replace(/\s/g, '')) ){
        return res.status(400).json({ message: 'Invalid name format' });
        
      }    if (!validator.isNumeric(number.toString()) || number.toString().length !== 10) {
        return res.status(400).json({ message: 'Invalid number format. Must be 10 digits' });
      }
    const newUser = new contact({
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        message:req.body.message
    });
    try{
      
await newUser.save();
res.json({message: 'Data saved successfully'});
    } catch (err){
        console.error('error saving user to database :',err);
        res.status(500).json({message:'error saving user to database', error:err});
    }
};

exports.getalluser = async (req, res) => {
  
    try {
        // Find the user in MongoDB
        const user = await contact.find();
res.status(200).json(user);

       
    } catch (error) {
       
        res.status(500).json({ error: 'can not show data' });
    }
};

