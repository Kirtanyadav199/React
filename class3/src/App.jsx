import React from 'react'
import Card from './card'

const App = () => {
  return (
    <div className='h-screen w-full bg-black flex flex-column gap-4 '>
      <Card user="Kirtan" age="5000"/>
      <Card user="Amrish" age="20"/>

    </div>
  )
}

export default App
