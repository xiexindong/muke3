import React ,{Component} from "react"
import {List,InputItem,Button,WingBlank,WhiteSpace} from "antd-mobile"
import {Redirect} from "react-router-dom"
import { login } from "../../redux/user.redux"
import { connect } from "react-redux"
import Logo from "../../component/logo/logo"
import Icons from "../../component/icons"
import "./index.css"


@connect(state=>state.user,{login})
class Login extends Component{
    constructor(props){
        super()
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
        this.props.login(this.state)
    }
    handelRegister = ()=>{
        this.props.history.push("/register")
    }

    render(){
        return<div>
            {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
            <Logo/>
            <WingBlank>
            <List>
                <InputItem onChange={(v)=>this.handelChange("user",v)} >
                <Icons icon="user"/>
                </InputItem>
                <WhiteSpace size="sm" className="WhiteSpace_bg"/>
                <InputItem onChange={(v)=>this.handelChange("pwd",v)}>
                 <Icons icon="pwd"/>
                </InputItem>
            </List>
              <div className="error-msg">{this.props.msg?this.props.msg:null}</div>
            <List>
                <Button type="primary" onClick={this.handelLogin}>登录</Button>
                <WhiteSpace size="sm"/>
                <Button type="primary" onClick={this.handelRegister}>注册</Button>
            </List>
            </WingBlank>
        </div>
    }
}

export default Login
