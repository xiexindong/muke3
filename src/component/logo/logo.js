import React from "react"
import logoImg from "./logo.jpg"
import "./logo.css"

const Logo = ()=>{
    return<div className="logo-container">
        <img src={logoImg} alt="logo.png"/>
    </div>
}



export default Logo