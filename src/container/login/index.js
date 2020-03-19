import React ,{Component} from "react"
import {List,InputItem,Button,WhiteSpace} from "antd-mobile"


class Login extends Component{
    state={
        user:"",
        pwd:""
    }

    handelChange = (key,v)=>{
        this.setState({
            [key]:v
        })
    }

    render(){
        return<div>
            <List>
                <InputItem onChange={(v)=>this.handelChange("user",v)} >用户名</InputItem>
                <InputItem onChange={(v)=>this.handelChange("pwd",v)}>密码</InputItem>
            </List>
            <List>
                <Button>登录</Button>
                <Button>注册</Button>
            </List>
        </div>
    }
}


export default  Login