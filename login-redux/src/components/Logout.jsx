import React from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice';

const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const handleLogout =(e) =>{
        e.preventDefault()
        dispatch(logout())
    }
  return (
    <div className='logout'>
        <h1>Welcome <span className='user_name'>{user.name}</span></h1>
        <button type='submit' onClick={(e) => handleLogout(e)}>Submit</button>
    </div>
  )
}

export default Logout