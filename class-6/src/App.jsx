import React, { useState } from 'react'

const App = () => {

  function submitHandler(e){
   e.preventDefault(e);
   const oldUsers = [...allUsers]
   oldUsers.push(title)
   console.log(oldUsers)
   setAllUsers(oldUsers)
    setTitle('') 
  }
 
  const [title,setTitle] = useState('')
  const [allUsers, setAllUsers] = useState('')
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" 
        placeholder='Enter Name' 
        value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
