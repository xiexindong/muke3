const express = require("express")
const bodyParser = require("body-parser")
const model = require("./model")
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))


// parse application/json
app.use(bodyParser.json())


app.post("/user/login",function (req,res) {
    
    console.log("req.body",req.body)
})

app.listen(9093,function () {
    console.log("服务已经启动")
})