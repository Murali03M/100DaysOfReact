import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from "../features/userSlice";
import './login.css';

const Login = () => {

    const [isName, setIsName] = useState("")
    const [isEmail, setIsEmail] = useState("")
    const [isPassword, setIsPassword] = useState("");
     
     const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        dispatch(login({
            name:isName,
            email:isEmail,
             password:isPassword,
             loggedIn:true,
        }))
        setIsEmail("");
        setIsPassword("");
    }
  return (
    <div className='login'>
        <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
          <h1>Login Here</h1>
          <input type="name" placeholder='Enter the Name' value={isName} onChange= {(e) => setIsName(e.target.value)} required/>
          <input type="email" placeholder='Enter the Email' value={isEmail} onChange= {(e) => setIsEmail(e.target.value)}/>
          <input type="password" placeholder='Enter the Password' value={isPassword} onChange= {(e) => setIsPassword(e.target.value)}/>

        <button type='submit' > Submit</button>
        </form>

    </div>
  )
}

export default Login