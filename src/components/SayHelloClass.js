import { Component } from "react";

class SayHelloClass extends Component {
    constructor () {
        super()
        this.state = {
            myName :"unCover My Name"
        }
    }
    handleClick = () => {
        // this.myName = "Hello Ali"
        // console.log(this.myName)
        this.setState({
            myName : "Hello Ali" 
        })

    }
    render() {
        const x = "hamada"
        console.log(`Call${x}`)
        //  this.myName = "unCover My Name"
        return <button onClick={this.handleClick}>{this.state.myName}</button>
    }

}

export default SayHelloClass



