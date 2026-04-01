import React from 'react'

const Card = (props) => {

  return (
    <div className='my-10 mx-10 border-2 border-red-400 h-fit rounded-2xl overflow-hidden'>
     <h1 className='text-3xl p-3 text-red-500 bg-white w-fit'>{props.user}, {props.age}</h1>
    </div>
  )
}

export default Card
