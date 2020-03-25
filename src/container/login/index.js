import React ,{Component} from "react"
import {List,InputItem,Button} from "antd-mobile"
import { login } from "../../redux/user.redux"
import { connect } from "react-redux"




@connect(state => state.user,{login})
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
    handelLogin = ()=>{
        this.props.login(this.state)
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

/*const  mapStateToProps = (state, ownProps) => {
    return {
        state: state.user
    }
}
使用这种方式 是不需要 react-thunk 来处理异步的

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)*/