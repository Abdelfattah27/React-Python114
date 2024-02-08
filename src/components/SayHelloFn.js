import React, { useState } from 'react'

function SayHelloFn({name}) {
 
    // console.log(props)
    
    const [message , setMessage] = useState("Uncover My Name")
    // const [message2 , setMessage2]= useState("Uncover My Name")
    // console.log(x)
    function handleClick() {
        setMessage(`Hello ${name}`)
    } 
  return (
    <div onClick={handleClick}>{message}</div>
  )
}

export default SayHelloFn