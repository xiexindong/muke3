const express = require("express");
const router = express.Router();
const utility = require("utility")
const model = require("./model");
const User = model.getModel("user");
const _filter_ = {"pwd":0,"__v":0};
const cookieConfig = {expires:new Date(Date.now()+1000),httpOnly:true}// 置了“httpOnly”属性，则通过程序（JS 脚本、applet 等）将无法读取到COOKIE 信息，防止 XSS 攻击的产生 。


router.post("/login2",(req,res,next)=>{
    let {user,pwd} = req.body;
    User.findOne({user,pwd:md5pwd(pwd)},_filter_,function(err,doc){
        if(!doc){
            return res.send({code:1,body:{msg:"用户不存在"}})
        }else{
           res.cookie("userId",doc._id,cookieConfig,{signed:true});
           return res.send({code:0,body:doc})

        }
    })
})


function md5pwd(pwd){
    let salt = "imooc_is_good_23223323dsdfs!#@HHHSFD"
    return utility.md5(utility.md5(salt+pwd))
}

module.exports = router