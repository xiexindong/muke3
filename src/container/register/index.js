import React ,{Component} from "react"
import {List,InputItem,WingBlank,WhiteSpace} from "antd-mobile"
import Icon from "../../component/icons"
import {createForm} from "rc-form"

@createForm()
class Register extends Component{

    render(){
        console.log(this.props)
        const {getFieldProps} = this.props.form;
        return<form action="" method="post" name="rigister">
            <WingBlank>
                <List>
                    <InputItem
                        {...getFieldProps("user")}
                        placeholder="请输入用户名"
                    >
                        <Icon icon="user"/>
                    </InputItem>
                    <WhiteSpace size="sm"/>
                    <InputItem
                        {...getFieldProps("pwd")}
                        placeholder="请输入密码"
                    >
                        <Icon icon="pwd"/>
                    </InputItem>
                </List>
            </WingBlank>
        </form>
    }
}

export default Register