import React,{createContext} from 'react'


export const UserDataContext = createContext()
const UserProvider = (props) => {

const user = 'kirtan' 

  return (
   <UserDataContext.Provider value={user}>
{props.children}
   </UserDataContext.Provider>
  )
}

export default UserProvider
