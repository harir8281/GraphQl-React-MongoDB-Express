import React from 'react'
import './UpdateUser.css'

function UpdateUser() {
  return (
    <div className='updateuser-container'>
        UpdateUser
        <input placeholder='name' className='updateuser-input'></input>
        <button className='updateuser-button'>update name</button>
        <input placeholder='username' className='updateuser-input'></input>
        <button className='updateuser-button'>update username</button>
    </div>
  )
}

export default UpdateUser