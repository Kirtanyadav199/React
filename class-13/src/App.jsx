import React, { useState } from 'react'
import Navbar from './compnents/Navbar'

const App = () => {


  const[theme,setTheme] = useState("black")

  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
  }

  return (
    <div>
      <Navbar theme={theme} changeTheme={changeTheme}/>
    </div>
  )
}

export default App
