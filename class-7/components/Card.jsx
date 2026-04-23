import React from 'react'

const Card = (props) => {
  return (
    <div 
    className=' w-[20vw]  rounded-xl py-8 px-8 bg-white text-black'>
      <img className='h-20 w-20 rounded-full object-center object-cover' src={props.elem.image} alt="" />
      <h1 className='text-2xl font-bold mt-2' > {props.elem.name}</h1>
      <h5 className='text-blue-500 text-lg font-semibold my-2'>{props.elem.role}</h5>
      <p className='text-sm font-medium leading-tight' >{props.elem.description}</p>
      <button onClick={()=>{
        props.deleteHandler(props.idx)
      }}
      className='bg-red-600 text-white rounded text-xs px-4 py-2 font-semibold cursor-pointer mt-3 active:scale-96'
       >Remove</button>
    </div>
  )
}

export default Card
