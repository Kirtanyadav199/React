import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}}  className='bg-pink-700 mb-1 flex items-center justify-between text-white px-8 py-3'>
     <h2>{props.title}</h2>
     <div className='flex gap-10'>
        {props.links.map(function(elem){
            return <h4>{elem}</h4>
        })}
     </div>
    </div>
  )
}

export default Navbar
