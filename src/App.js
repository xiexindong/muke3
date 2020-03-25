import React,{Component} from "react"
import {createStore,combineReducers,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import  thunk  from "redux-thunk"
import { Router, Route, Switch } from "react-router";
import {comReducer} from "./redux/index"
import Login from "./container/login"
import Register from "./container/register"
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(combineReducers(comReducer),composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(function(){
    console.log(store.getState())
})


class App extends Component{
    
    render(){
        return(<Provider store={store}>
            <Login/>
            {/* <Register/> */}
        </Provider>)
    }
}




export default App