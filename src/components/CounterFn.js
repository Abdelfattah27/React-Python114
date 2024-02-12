import React, { useState } from 'react'
import styles from "./counterfn.module.css"
// props are immutable
function CounterFn({start , step ,id, fn}) {
    const  [counter , setCounter] = useState(start)
    const increment = ()=> {
        setCounter(counter + step)
        // fn(`counter now = ${counter + step}`)
    }
    const style = {
      backgroundColor:"red"
    }
  return (
    <div>
        <div>Count = {counter}</div>
        <button className={styles.button} onClick={increment}>Increment</button>
        <button onClick={() => fn(id)}>Delete Me</button>
    </div>
  )

}

export default CounterFn