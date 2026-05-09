import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section2 = () => {

  const theme = useContext(ThemeDataContext)
  return (
    <div>
      Section2
      {theme}
    </div>
  )
}

export default Section2
