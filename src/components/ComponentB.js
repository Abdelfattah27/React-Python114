import React, { Component } from 'react'

export class ComponentB extends Component {
  constructor(props) {
    super(props)
    console.log("Hello From Constructor B")
  
    this.state = {
       first:"hELLO"
    }
  }
  static getDerivedStateFromProps(props ,states ) {
    // console.log(states)
    // console.log(props)
    console.log("Hello From getDerivedStateFromProps B")
    // return {
    //   first: "Hamada"
    // }
    return null
  }
  render() {
    console.log("Hello From render B")
    return (
      <div>
        componentB </div>
    )
  }
  componentDidMount(){
    console.log("Hello from Component Did Mount B")
  }
}

export default ComponentB