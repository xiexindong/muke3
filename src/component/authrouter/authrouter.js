import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import axios from "axios"

@withRouter
class AuthRouter extends Component{
    
    // 获取用户信息是否已经登录

    componentDidMount(){
        let publicList = ["/register","/login"]
        axios.get("/user/info").then(res=>{
            console.log(1111,res)
            let pathname = this.props.location.pathname; 
            // 未登录
            if(res.status == 200 && res.data.code == 1){
                // 没有登录 且在登录和注册页面 不需要跳转
                if(publicList.indexOf(pathname)> -1){
                    return false 
                }else{
                // 没有登录 且路由 不是 login || register
                    this.props.history.push("/register")
                }
            }
            // 已登录
            if(res.status == 200 && res.data.code == 0){
                    let userType = res.data.type;
                    let type = userType == "genius"?"genius":"boss"
                    // 已经登录 且在login || register  跳转至登录后的首页
                    if(publicList.indexOf(pathname) > -1){
                        this.props.history.push(`${type}+info`)
                    }else{
                    // 已经登录 但不是login || register 保持在原来的页面
                        
                    }    

            }
        })
    }

    render(){
        return null

    }
}

export default AuthRouter