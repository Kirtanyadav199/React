import React,{useContext} from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {


  const data= useContext(UserDataContext)
  return (
    <div className='h-[15%] w-full bg-emerald-600' >
      <h1>This is Navbar {data}</h1>
    </div>
  )
}

export default Navbar
