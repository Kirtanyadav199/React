import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

     const navigate = useNavigate()

  return (
    <div  className='footer'
     onClick={()=>{navigate('/courses')}}
     ><h3>Footer</h3>
      <button>Explore courses</button>
    </div>
  )
}

export default Footer
