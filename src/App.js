import React,{Component} from "react"
import {createStore,combineReducers} from "redux"
import {Provider} from "react-redux"
import {comReducer} from "./redux/index"
import Login from "./container/login"
import Register from "./container/register"

const store = createStore(combineReducers(comReducer))



class App extends Component{
    render(){
        return(<Provider store={store}>
            <Login/>
            <Register/>
        </Provider>)
    }
}




export default App