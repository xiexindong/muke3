import React ,{Component} from "react"
import { List, InputItem,WingBlank, WhiteSpace ,Button,TextareaItem } from 'antd-mobile';
import {connect} from "react-redux"
import {update} from "../../redux/user.redux"


@connect(state => state.user,{update})
class Bossinfo extends Component {
    state = {
        title:"",
        company:"",
        money:"",
        desc:""
    }
    onChange(key,v){
        this.setState({
            [key]:v
        })
    }

    render() {
        return<WingBlank>
            <List renderHeader={()=>"请完善招聘信息"} >
                <InputItem
                    placeholder="请输入招聘信息"
                    onChange={(v)=>{this.onChange("title",v)}}
                >招聘信息</InputItem>
                <WhiteSpace size="lg"/>
                <InputItem
                    placeholder="请输入公司名称"
                    onChange={(v)=>{this.onChange("company",v)}}
                >公司名称</InputItem>
                <WhiteSpace size="lg"/>
                <InputItem
                    placeholder="请输入职位薪资"
                    onChange={(v)=>{this.onChange("money",v)}}
                >职位薪资</InputItem>
                <WhiteSpace size="xl" />
                <TextareaItem
                    title="职位要求"
                    placeholder="auto focus in Alipay client"
                    data-seed="logId"
                    ref={el => this.autoFocusInst = el}
                    autoHeight
                    rows="3"
                    onChange={(v)=>this.onChange("desc",v)}
                >

                </TextareaItem>
                <div className="error-msg">{this.props.msg?this.props.msg:null}</div>
                <Button onClick={()=>this.props.update(this.state)} type="primary">提交</Button>
            </List>
        </WingBlank>

    }
}
export  default  Bossinfo