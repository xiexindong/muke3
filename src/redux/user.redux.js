import axios from "axios"


const LOAD_DATA = "LOAD_DATA";
const LOGIN_SUCESS = 'LOGIN_SUCESS';
const ERROR_MSG = "ERROR_MSG"

const initData = {
    user:"",
    pwd:"",
    msg:""
}



export function user(state = initData, action){
    switch(action.type){
        case LOAD_DATA:
            return{...state,msg:"",...action.payload}
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
// function loginSuccess(data){
//
//     return {type:LOGIN_SUCESS,payload:data}
// }

function errorMsg(data){
    return{type:ERROR_MSG,data:data}
}



// dispatch

export function login({user,pwd}){

    if(!user||!pwd){
        return  errorMsg("请输入用户名和密码")
    }

    return dispatch => {
        axios.post("/user/login",{user,pwd}).then(function (data) {
            console.log("userdata",data)
            dispatch(loadData({user,pwd}))
        }).catch(function (error) {

        })
    }



}