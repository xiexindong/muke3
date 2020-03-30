const express = require("express");
const router = express.Router();
const utility = require("utility")
const model = require("./model");
const User = model.getModel("user");
const _filter_ = {"pwd":0,"__v":0};
const cookieConfig = {maxAge:900000,httpOnly:true}// 置了“httpOnly”属性，则通过程序（JS 脚本、applet 等）将无法读取到COOKIE 信息，防止 XSS 攻击的产生 。

router.post("/login",(req,res,next)=>{
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


router.get("/info",(req,res,next)=>{
    let {userId} = req.cookies
    if(!userId){
        return res.send({code:1,body:{msg:"尚未登录"}})
    }
    User.findOne({_id:userId},_filter_,function(err,doc){
        if(!doc){
            return res.send({
                code:1,
                body:{
                    msg:"后台出错"
                }
            })
        }
        if(doc){
            return res.send({code:0, body:doc})
        }

    })
})

router.post("/register",function(req,res){

    // 先查一遍此用户是否注册过
    const {user,pwd,type} = req.body;

    User.findOne({user,pwd:md5pwd(pwd),type},_filter_,function(err,doc){

        if(doc){
            return res.send({code:1,body:{msg:"用户已存在"}})
        }
        const userModel = new User({user,pwd:md5pwd(pwd),type})
        userModel.save(function(err,doc){
            if(err){
                return res.send({
                    code:1,
                    bdoy:{
                        msg:"后台出错了"
                    }
                })
            }else{
                const {user,type,_id} = doc
                res.cookie("userId",_id,cookieConfig,{signed:true})
                return res.send({code:0,body: {user,type,_id}})
            }


        })
    })


})


router.post("/update",function (req,res) {
  const userId = req.cookies.userId;
    if(!userId){
        return res.send({
            code:1,
            body:{
                msg:"回话结束重新登录"
            }
        })
    }
  let data = req.body;

   User.findByIdAndUpdate(userId,{...data},{fields:{pwd:0,__v:0}},function(err,doc){
      if(doc){
          return res.send({
              code:0,
              body:{
                  data:doc
              }

          })
      }
   })


})

function md5pwd(pwd){
    let salt = "imooc_is_good_23223323dsdfs!#@HHHSFD"
    return utility.md5(utility.md5(salt+pwd))
}

module.exports = router