import React, {useState } from 'react'




const App = () => {

  const[form,setForm] = useState({
   name:'',
   email:'',
   profession:'',
   profile:null,
  })

  const[users,setUsers] = useState([])

  const handleClick=(event)=>{
    const name = event.target.name
    const value = event.target.value 
    const files = event.target.files
    
    if(name == 'profile'){
      setForm({
        ...form,
        profile:files[0]
      })
    }else{
      setForm({
        ...form,
        [name]: value
      })
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
     const newUser = {
      ...form,
      profile: form.profile
        ? URL.createObjectURL(form.profile)
        : null
    };

    setUsers([...users,newUser])

    setForm({
       name:'',
   email:'',
   profession:'',
   profile:null,
    })
  }

  const handleDelete=(idx)=>{
const updateUsers = users.filter((value, i) => i !== idx)
setUsers(updateUsers)
  }

  return (
    <div className=' w-full h-screen '>
      <div className='w-full px-6 py-2 flex flex-col justify-center items-center'>
        <h2 className='font-bold text-'>User Details</h2>
      <form  className='flex flex-col' onSubmit={handleSubmit}>
        <input
         type="text"
         name="name"
         placeholder='Enter name'
         onChange={handleClick}
         className='border-2 rounded-2xl px-2'
         />
         
       
          
         <input
         type="text"
         name="profession"
         placeholder='Enter profession'
         onChange={handleClick}
          className='border-2 rounded-2xl px-2'
         />
          
         <input
         type="file"
         name="profile"
         placeholder='Enter photo'
         onChange={handleClick}
         className='border-2 rounded-2xl px-2 text-center'
         />
        
         <button type='submit'>Create Card</button>
      </form>
      </div>
      

        {/* Cards */}
        <div className='flex flex-wrap px-10 py-10 gap-10'>
          {users.map((user, idx) => (
  <div key={idx}  className="bg-[#ffffffa7] flex flex-col border-2 w-[18vw] h-[25vw] items-center gap-3 rounded-2xl pt-5">
    {user.profile && (
      <img src={user.profile} alt="profile" 
        className="rounded-full border-2 w-[8vw] h-[8vw]"
      />
    )}
    <h3 className='text-2xl text-center font-extrabold'>Name:{user.name}</h3>
    
    <p className='text-xl text-center '>Profession:{user.profession}</p>

    <button onClick={() => handleDelete(idx)} 
    className='px-4 py-2 mt-3'
      >Delete</button>
  </div>
))}
        </div>
    </div>
  )
}

export default App