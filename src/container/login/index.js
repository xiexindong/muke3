import React ,{Component} from "react"
import {List,InputItem} from "antd-mobile"


class Login extends Component{
    render(){
        return<div>
            <List>
                <InputItem>用户名</InputItem>
                <InputItem>密码</InputItem>
            </List>
        </div>
    }
}


export default  Login