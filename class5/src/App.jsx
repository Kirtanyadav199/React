import React, { use } from 'react'
import { useState } from 'react'

const App = () => {
  const [marks,setMarks] = useState([50,78,90,12,25])
   

  function giveGrace(){
    const newMarks = marks.map(function(elem){
      return elem+5;
    })
    setMarks(newMarks)
  }

  return (
    <div className=''>
     {marks.map(function(elem,idx){
      return <h1 key={idx} >Student {idx+1} = {elem} ({elem>33?'pass':'fail'})</h1>
     })}
     <button onClick={giveGrace}>Give them grace</button>
    
    </div>
  )
}

export default App

