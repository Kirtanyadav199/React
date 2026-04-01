import React from 'react'
import Card from './card'

const App = () => {
   const users  = ["kirtan","harshit","krishna","Amrish"]
  return (

    <div className='h-screen w-full bg-black flex flex-column gap-4 '>
     {users.map(function(elem){
      return <Card user={elem}/>
     })}
    </div>
  )
}

export default App
