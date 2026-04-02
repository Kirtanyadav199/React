import React, { useState } from 'react'
import Washroom from './washroom'

const App = () => {
  const [gender, setGender] = useState('male')
 
  function changeGender(){
    if(gender == 'male'){
     setGender('female')
    }else if(gender == 'female'){
     setGender('other')
    }
    else{
      setGender('male')
    }
  }
  return (
    <div>
      <h1>Your gender is = {gender}</h1>
     <button onClick={changeGender}>Change Gender</button>
      <Washroom user={gender}/>
    </div>
  )
}

export default App
