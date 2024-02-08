import React, { Component } from 'react'

export class CounterCls extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter : this.props.start
      }
    }
    increment = () => {
        this.setState((prev) => ({
            counter : prev.counter + this.props.step
        } ))
    }
    incrementFive = () => {
        this.increment()
        this.increment()
        // this.increment()
        // this.increment()
        // this.increment()
    }
    

  render() {
    return (
      <div>
        <div>counter : {this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementFive}>Increment 5 </button>
      </div>
    )
  }
}

export default CounterCls