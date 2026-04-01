import React from 'react'


const Influencer = () => {
    const users = [
  {
    id: 1,
    username: "amanda_nash",
    name: "Amanda Nash",
    followers: "241k",
    media: 37,
    following: 231,
    image: "https://picsum.photos/400/300?random=1"
  },
  {
    id: 2,
    username: "john_doe",
    name: "John Doe",
    followers: "120k",
    media: 54,
    following: 180,
    image: "https://picsum.photos/400/300?random=2"
  },
  {
    id: 3,
    username: "sarah_lee",
    name: "Sarah Lee",
    followers: "89k",
    media: 22,
    following: 140,
    image: "https://picsum.photos/400/300?random=3"
  },
  {
    id: 4,
    username: "michael_smith",
    name: "Michael Smith",
    followers: "310k",
    media: 75,
    following: 400,
    image: "https://picsum.photos/400/300?random=4"
  },
  {
    id: 5,
    username: "emma_watson",
    name: "Emma Watson",
    followers: "500k",
    media: 65,
    following: 210,
    image: "https://picsum.photos/400/300?random=5"
  }
];

  return (
    <div className='flex gap-5'>
   
        {users.map(function(elem){
           return <div className='bg-white h-70 my-20 w-60 rounded-2xl overflow-hidden '>
           {/* image div */}
               <div className='p-4'>
                <img src={elem.image} alt="kuchni"  className="w-full h-40 object-cover rounded-2xl"/>
               </div>

              <div className='flex justify-center font-bold'><h1>{elem.name}</h1></div>  

              <div className='border-2 rounded-2xl border-transparent bg-pink-200'>
                <div className='flex flex-row gap-4 justify-center font-medium'><h1>Followers:{elem.followers}</h1><h1>Following:{elem.following}</h1></div>
              </div>
                
           </div>
        })}
   
    </div>
  )
}

export default Influencer
