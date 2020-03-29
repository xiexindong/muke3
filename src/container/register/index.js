import React ,{Component} from "react"
import {List,InputItem,WingBlank,WhiteSpace,Radio,Button} from "antd-mobile"
import {Redirect} from "react-router-dom"
import { connect } from "react-redux";
import {register} from "../../redux/user.redux"
import Icon from "../../component/icons"
import Logo from "../../component/logo/logo"


const RadioItem = Radio.RadioItem;

@connect(state => state.user,{register})
class Register extends Component{
    state = {
        "user":"",
        "pwd":"",
        "repeatpwd":"",
        "type":"genius",

    }
   
    handleChange(key,v){
        this.setState({
            [key]:v
        })
    }

    handleRegister =()=>{
        this.props.register(this.state)
    }

    render(){ 
        return<div>
            <WingBlank>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
                <Logo/>
                <List>
                    <InputItem placeholder="请输入用户名" onChange={(v)=>this.handleChange("user",v)} > <Icon icon="user"/> </InputItem>
                    <WhiteSpace size="sm"/>
                    <InputItem placeholder="请输入密码" onChange={(v)=>this.handleChange("pwd",v)}><Icon icon="pwd"/></InputItem>
                    <WhiteSpace size="sm"/>
                    <InputItem  placeholder="确认密码"  onChange={(v)=>this.handleChange("repeatePwd",v)}><Icon icon="cfpwd"/></InputItem>
                    <RadioItem checked={this.state.type ==="genius"} onChange={()=>this.handleChange("type","genius")}><List.Item.Brief>牛人</List.Item.Brief></RadioItem>
                    <RadioItem checked={this.state.type ==="boss"}  onChange={()=>this.handleChange("type","boss")}><List.Item.Brief>Boss</List.Item.Brief></RadioItem>
                </List>
                <div className="error-msg">{this.props.msg?this.props.msg:null}</div>
            

                <Button type="primary" onClick={this.handleRegister}>注册</Button>
            </WingBlank>
        </div>
    }
}

export default Register