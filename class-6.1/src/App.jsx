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
    <div className='border-2 w-screen h-screen'>
      <div className='border-2 border-blue-400 w-fit h-fit '>
        <h2 className='mx-144 font-bold text-'>User Details</h2>
      <form  className='flex justify-around' onSubmit={handleSubmit}>
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
        <div className='flex gap-2'>
          {users.map((user, idx) => (
  <div key={idx} className='border-2 w-40 h-50 rounded-2xl'>
    {user.profile && (
      <img src={user.profile} width="80" height="80" alt="profile" 
      className='rounded-full border-2'
      />
    )}
    <h3>Name:{user.name}</h3>
    
    <p>Profession:{user.profession}</p>

    <button onClick={() => handleDelete(idx)}>Delete</button>
  </div>
))}
        </div>
    </div>
  )
}

export default App
