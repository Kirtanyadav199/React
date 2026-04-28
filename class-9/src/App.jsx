import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './components/user'

const App = () => {

  const[allUsers,setallUsers] = useState([])

 async function getData(){

const response =  await axios.get('https://picsum.photos/v2/list')
  setallUsers(response.data)
  }

  // useEffect(function(){
  //   getData()
  // },[])

  return (
    <div>
      <button onClick={getData}>click me</button>
      <div className='all-cards'>
         {allUsers.map(function(elem,idx){
       return <div  key={idx} >
        <User elem={elem} />
       </div>
      })}
      </div>
     
    </div>
  )
}

export default App
