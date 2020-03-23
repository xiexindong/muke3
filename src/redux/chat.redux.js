const MSG_RECV ="MSG_RECV"

const initData = {
    chatmsg:[],
    users:{},
    unread:0
}


export function chat(state=initData,action){
    switch(action.type){
        case MSG_RECV:
            return{...state,...action.payload}
        default:
            return {...state}    
    }
}


// action
function msgRecv(userid,data) {
    return {type:MSG_RECV,payload:data}
}


// dispatch
export function recvMsg(){
    return (dispatch,getState)=>{
        dispatch(msgRecv(111,222))
    }
}



