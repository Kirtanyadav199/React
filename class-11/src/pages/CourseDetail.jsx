import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams()
  return (
       <h1 className='text-5xl font-semibold absolute left-1/2 -translate-x-1/2'  >
        {params.courseid} Course Detail
        </h1>
  )
}

export default CourseDetail
