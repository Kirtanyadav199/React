import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>

        <NavLink  
        style={({isActive})=>({
            color: isActive? 'red' : 'white'
        })}
        to='/'>Home
        </NavLink>
        <NavLink to='/about'
        style={({isActive})=>({
            color: isActive?'red':'white'
        })}
        >
        About
        </NavLink>
        <NavLink to='/courses'
   style={({isActive})=>({
    color: isActive?'red':'white'
   })}
        > Courses</NavLink>

    </div>
  )
}

export default Navbar
