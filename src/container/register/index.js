import React,{Component} from "react"

class Register extends Component {
    handleClick(){
        console.log(this); //下面调用加了(),这个时候发现,this是可以拿到的
    }
    render() {
      return (
        <div className="App">
          <button onClick={this.handleClick()}>点我</button> 
        </div>
      );
    }
  }

  export default Register