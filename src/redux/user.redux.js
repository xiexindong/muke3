const LOAD_DATA = "LOAD_DATA";
const LOGIN_SUCESS = 'LOGIN_SUCESS';

const initData = {
    user:"",
    pwd:""
}



export function user(state = initData, action){
    switch(action.type){
        case LOAD_DATA:
            return{...state,...action.payload}
        default:
            return state    
    }
}


// action
export function loadData(data){
    return{type:LOAD_DATA,payload:data}
}
function loginSuccess(data){
    return {type:LOGIN_SUCESS,payload:data}
}


// dispatch

export function login(user,pwd){
    if(!user||!pwd){
        return "请填写用户名和密码"
    }

    return dispatch =>{
        setTimeout(()=>{
            dispatch(loginSuccess({user:"xiexindong",pwd:"123"}))
        },1000)
    }

    

}