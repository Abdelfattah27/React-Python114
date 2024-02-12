import React, { Component } from 'react'
import ComponentB from "./ComponentB"

export class ComponentA extends Component {
  constructor(props) {
    super(props)
    console.log("Hello From Constructor")
  
    this.state = {
       counter: 0
    }
  }
  static getDerivedStateFromProps(props ,states ) {
    // console.log(states)
    // console.log(props)
    console.log("Hello From getDerivedStateFromProps")
    // return {
    //   first: "Hamada"
    // }
    return null
  }
  shouldComponentUpdate(){
    console.log("Hello From Should Component Update")
    return false

  }
  handleClick () {
    this.setState({
      counter : this.state.counter + 1
    })
  }
  render() {
    console.log("Hello From render")
    return (
      <div>
        {/* <ComponentB></ComponentB> */}
         {this.state.counter}
         <button onClick={() => this.handleClick()}>increment</button>
         
         
         </div>
    )
  }
  componentDidMount(){
    console.log("Hello from Component Did Mount")
  }
  componentDidUpdate(){
    console.log("Component Did Update")
  }
  componentWillUnmount(){
    console.log("Hello From Component Will Unmount")
  }
}

export default ComponentA