import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

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

  {/* <button onClick={logout}>log out</button> */}
  </div>
    </div>
  )
}

export default Login