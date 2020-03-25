import React from "react"
import "./icon.css"

// 函数式组件 没有 this 生命周期 state

let Icons = (props)=> {
    return<img className="icons" src={require(`./${props.icon}.png`)} alt="show_icon"/>
}


export default Icons