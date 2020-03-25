import React,{Component} from "react"
import {createStore,combineReducers,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {comReducer} from "./redux/index"
import Login from "./container/login"
import Register from "./container/register"

const store = createStore(combineReducers(comReducer),applyMiddleware(thunk))

class App extends Component{
    render(){
        return(<Provider store={store}>
            <Login/>
            <Register/>
        </Provider>)
    }
}




export default App