import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Footer = () => {

  const theme= useContext(ThemeDataContext)
  return (
    <div className='foot'>
      <h1>Footer</h1>
      {theme}
    </div>
  )
}

export default Footer
