import React from 'react'
import './DeleteUser.css'

function DeleteUser() {
  return (
    <div className='deleteuser-container'>
        DeleteUser
        <input placeholder='enter you user id' className='deleteuser-input'></input>
        <button className='deleteuser-button'>delete user</button>
    </div>
  )
}

export default DeleteUser