const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");

Router.post("/login",(req,res,next)=>{
    let {user,pwd} = req.body;
    User.findOne({user,pwd:})
})