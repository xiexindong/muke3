
const LOAD_DATA = "LOAD_DATA";
const LOGIN_SUCESS = 'LOGIN_SUCESS';

const initData = {
    user:"",
    pwd:""
}



export function user(state = initData, action){
    switch(action.type){
        case LOAD_DATA:
            console.log("action.type",action.type)
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
    console.log('data22222',data)
    return {type:LOGIN_SUCESS,payload:data}
}


// dispatch

export function login({user,pwd}){
    if(!user||!pwd){
        return "请填写用户名和密码"
    }
    console.log({user,pwd})

    return (dispatch,getState) => {
        axios.post("/user/login",{user,pwd}).then(res=>{
            if(res.status == 200 && res.data.code == 0){
                dispatch(loginSuccess(res.data.data));
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }



}