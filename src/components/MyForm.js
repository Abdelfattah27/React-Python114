import React, { useState } from 'react'

function MyForm() {
    const [firstName , setFirstName] = useState("")
    const [comment , setComment] = useState("")
    const [hobby , setHobby] = useState(1)
    const handleNameChange = (e) => {
        setFirstName(e.target.value)

    }
    const handleTextChange = (e) => {
        setComment(e.target.value)

    }
    const handleHobbyChange = (e) => {
        setHobby(e.target.value)

    }
  return (
    <form  className='form container'>
        
        <div>   
            <label htmlFor="first-name">First Name</label>           
            <input onChange={handleNameChange} value={firstName} id="first-name"  type='text' name="first_name" placeholder='enter your name' className='form-control'></input>
        </div>
        <div>   
            <label htmlFor="comment">Comment</label>           
            <textarea onChange={handleTextChange} value={comment} id="comment"  type='text' name="comment" placeholder='Type any Comment' className='form-control'></textarea>
        </div>
        <div>   
            <label htmlFor="hobby">Hobby</label>    
            <select    name="hobby" id="hobby" onChange={handleHobbyChange} value={hobby} className='form-control'>
                <option>Select 1</option>
                <option value={1}>Reading</option>
                <option value={2}>Writing</option>
            </select>       
        </div>
        <button type='submit'>Submit</button>
 
    </form>
  )
}

export default MyForm