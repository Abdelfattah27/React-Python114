import React, { useState } from 'react'

function SayHello() {
    const [counter , setCounter] = useState(0)
    const increment = ()=>{
        setCounter(counter +1)
    }
  return (
    <div>
        <button onClick={increment}>increment</button>
        counter now = {counter}
    </div>
  )
}

export default SayHello