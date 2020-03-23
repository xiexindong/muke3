import React ,{Component} from "react"
import {List,InputItem,Button} from "antd-mobile"
import { login } from "../../redux/user.redux"
import { connect } from "react-redux"




@connect(state => state.user,{login})
class Login extends Component{
    constructor(props){
        super()
        console.log("this",this)
    }
    state={
        user:"",
        pwd:""
    }

    handelChange = (key,v)=>{
        this.setState({
            [key]:v
        })
    }

    handelLogin = ()=>{
        // console.log(this)
        // this.props.login(this.state)
    }

    render(){
    
        return<div>
            <List>
                <InputItem onChange={(v)=>this.handelChange("user",v)} >用户名</InputItem>
                <InputItem onChange={(v)=>this.handelChange("pwd",v)}>密码</InputItem>
            </List>
            <List>
                <Button type="primary" onClick={this.handelLogin}>登录</Button>
                <Button type="primary">注册</Button>
            </List>
        </div>
    }
}


export default Login