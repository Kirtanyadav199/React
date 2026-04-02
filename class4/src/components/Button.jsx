import React from 'react'

const Button = () => {
    function btnClicked(){
        console.log("Kirtan yadav is the king ")
    }
  return (
    <div>
      <button onClick={()=>{
        btnClicked()
      }} className='bg-black text-2xl font-bold text-white rounded h-10 w-20 m-19'>click me</button>
    </div>
  )
}

export default Button
