import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const[king,setKing] = useState("kirtan")

  function changeking(){
    console.log("button clicked")
    setKing("Amrish")
  }
  return (
    <div>
      <h1>{king}</h1>
      <button onClick={changeking}>changeking</button>
    </div>
  )
}

export default App

