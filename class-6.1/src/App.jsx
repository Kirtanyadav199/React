import React, { useState } from 'react'

const App = () => {

  const[name,setName] = useState("");

  const handleChange =(event)=>{
    setName(event.target.value);
  }
  const handleSubmit = (event)=>{
   event.preventDefault();
   alert(`hii,${name}`)
  }

  return (
    <div>
      <h3>Welcome</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder='Enter your name' onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
