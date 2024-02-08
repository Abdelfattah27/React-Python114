import React, { useState } from 'react'
// props are immutable
function CounterFn({start , step , fn}) {
    const  [counter , setCounter] = useState(start)
    const increment = ()=> {
        setCounter(counter + step)
        // fn(`counter now = ${counter + step}`)
    }
  return (
    <div>
        <div>Count = {counter}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={fn}>Delete Me</button>
    </div>
  )

}

export default CounterFn