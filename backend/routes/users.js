const router= require('express').Router();

const { model } = require('mongoose');
let User=require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(users=> res.json(users))
    .catch(err=>res.status(400).json('Error:' + err))
});

router.route('/add').post((req,res)=>{
    const username=req.body.username;

    //  here we create a new user by using a user name variable 
    const newUser= new User({username});

    newUser.save() 
    .then(()=>res.json('User added'))
    .catch(err=>res.status(400).json('Error:' +err ))
});

module.exports=router;
