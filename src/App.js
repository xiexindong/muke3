import React,{Component} from "react"
import {createStore,combineReducers,applyMiddleware} from "redux"
import {BrowserRouter as Router,Route} from "react-router-dom"
import {Provider} from "react-redux"
import  thunk  from "redux-thunk"
import {comReducer} from "./redux/index"
import Login from "./container/login"
import Register from "./container/register"
import {composeWithDevTools} from 'redux-devtools-extension';
import "./common.css"

const store = createStore(combineReducers(comReducer),composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(function(){
    console.log(store.getState())
})


class App extends Component{

    render(){
        return(<Provider store={store}>
            <Router>
                <div>
                    <Route path={["/","/login"]}>
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                </div>
            </Router>
        </Provider>)
    }
}




export default App