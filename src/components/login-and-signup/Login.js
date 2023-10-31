import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./loginsignup.css"
import { Link } from 'react-router-dom';
import Registration from './Registration';

const Login = () => {
    const [email ,setEmail] =useState("")
    const [password ,setPassword] =useState("")

    const LogIn =(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentials)=>{
            console.log(userCredentials)
        }).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{

    })
  return (
    <div>
 <form onSubmit={LogIn}>
    <h1> Login</h1>
    <input type="email" name="" id=""  placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" name="" id=""  placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/>
    <button type='submit'> Login</button>
 </form>
  <div>

        not signed up? 
        Register here 
     

  </div>
    </div>
  )
}

export default Login