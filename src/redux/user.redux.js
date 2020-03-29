import axios from "axios"
import {getRedirectPath} from "../util"


const REGISTER_SUCCESS = "REGISTER_SUCCESS"
const LOAD_DATA = "LOAD_DATA";
const LOGIN_SUCCESS = 'LOGIN_SUCESS';
const ERROR_MSG = "ERROR_MSG"


const initData = {
    user:"",
    pwd:"",
    msg:"",
    redirectTo:""
    
}



export function user(state = initData, action){
    switch(action.type){
        case LOAD_DATA:
            return{...state,msg:"",...action.payload}
        case LOGIN_SUCCESS:
            return {...state,msg:"",...action.payload,redirectTo:"/bossinfo"}
        case REGISTER_SUCCESS:
            return{...state,msg:"",...action.payload,redirectTo:getRedirectPath({...action.payload})}    
        case ERROR_MSG:
            
            return{...state,msg:action.data}
        default:
            return state
    }
}


// action
export function loadData(data){
    return{type:LOAD_DATA,payload:data}
}
function loginSuccess(data){
    return {type:LOGIN_SUCCESS,payload:data}
}

function errorMsg(data){
    return{type:ERROR_MSG,data:data}
}

function rigsterSuccess(data){
    return {type:REGISTER_SUCCESS,payload:data}
}


// dispatch
export function login({user,pwd}){
    if(!user||!pwd){
        return  errorMsg("请输入用户名和密码")
    }
    return dispatch => {
        axios({
            url:"/user/login",
            method:"post",
            data:{user,pwd},
        }).then(function (res) {
            if(res.status == 200 && res.data.code == 0){
                dispatch(loginSuccess(res.data.body))
            }else{
                dispatch(errorMsg(res.data.body.msg))
            }
        })
    }



}
// {user,pwd,repeatePwd,type}
export function register( {user,pwd,type,repeatePwd} ){

    
    // type 默认是有的
    if(!user || !pwd){
        return errorMsg("请输入用户名和密码")
    }

    if(pwd !== repeatePwd){
        return errorMsg("密码不一致")
    }

    return(dispatch)=>{
        axios.post("/user/register",{user,pwd,type}).then(res=>{
            if(res.status == 200 && res.data.code == 1){
                dispatch(errorMsg(res.data.body.msg))
            }else{
                dispatch(rigsterSuccess({user,pwd,type}))
            }
        })
    }

    
}