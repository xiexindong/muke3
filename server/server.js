const express = require("express")
const bodyParser = require("body-parser")
const cookieParse = require("cookie-parser")
const userRouter = require("./user")

const app = express()


app.use(cookieParse("secret"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))


// parse application/json
app.use(bodyParser.json())



app.use("/user",userRouter)

app.listen(9093,function () {
    console.log("服务已经启动")
})