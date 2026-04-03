import React from 'react'

const App = () => {

  function submitHandler(e){
   e.preventDefault(e);
    console.log("submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
