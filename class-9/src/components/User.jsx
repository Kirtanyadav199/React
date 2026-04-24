import React from 'react'

const User = (props) => {

  const crl1 = Math.floor(Math.random()*256)
  const crl2 = Math.floor(Math.random()*256)
  const crl3 = Math.floor(Math.random()*256)

  return (
    <div  style={{backgroundColor:`rgb(${crl1},${crl2},${crl3})`}}  className='user-card' >
      <img className='img' src={props.elem.download_url} alt="" />
      <h1>{props.elem.author}</h1>
      <h3>{props.elem.id}</h3>
    </div>
  )
}

export default User
