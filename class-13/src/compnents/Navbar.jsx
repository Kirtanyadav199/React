import React, { useState } from 'react'

const Navbar = (props) => {

    const[newTheme,setNewTheme] = useState("")

  return (
    <div>
      <h1>Theme is {props.theme}</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        props.changeTheme(newTheme)
        setNewTheme('')
      }}>
        <input 
        type="text"
        value={newTheme}
        placeholder='enter theme'
        onChange={(e)=>{setNewTheme(e.target.value)}}
         />
         <button>Submit</button>
      </form>
    </div>
  )
}

export default Navbar
