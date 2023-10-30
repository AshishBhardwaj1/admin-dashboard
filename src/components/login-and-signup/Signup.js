import React, { useState } from 'react';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email ,setEmail] =useState("")
    const [password ,setPassword] =useState("")

    const signUp =(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials)=>{
            console.log(userCredentials)
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>
 <form onSubmit={signUp}>
    <h1> Sign up</h1>
    <input type="email" name="" id=""  placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" name="" id=""  placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/>
    <button type='submit'> sign up</button>
 </form>

    </div>
  )
}

export default Signup