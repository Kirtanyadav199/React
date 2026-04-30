import React from 'react'
import { useParams } from 'react-router-dom'

const Anycourse = () => {

  const params = useParams()

  return (
    <h1 className='text-5xl font-semibold absolute left-1/2 -translate-x-1/2'  >
        {params.courseid} Course Page
        </h1>
  )
}

export default Anycourse
