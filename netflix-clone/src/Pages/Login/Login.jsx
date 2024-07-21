import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { SignIn ,Signup } from '../../Firebase'

const Login = () => {
  const [singState, setsingstate] = useState("Sign In")
  const [ name , setname ] = useState("");
  const [ email , setemail ] = useState('');
  const [ password , setpassword ] = useState('');

  const user_auth = async (event)=>{
    event.preventdefault();
    if(singState==="Sign In"){
      await SignIn(email,password);

    }else{
      await Signup(name,email,password)
    }
  }

  return (
    <div className='Login'>
      <img src={Logo} alt="" className='Login-Logo'/>
      <div className="Login-Form">
        <h1>{singState}</h1>
        <form >
          {singState==="Sign Up"? <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder='your Name' />:<></>}
          
          <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder='Email' />

          <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder='Password' />
          
          <button type='submit' onClick={user_auth}>{singState}</button>

          <div className="form-Help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help...?</p>
          </div>
        </form>
        <div className="Form-Switch">
          {singState==="Sign In"? <p>New To Netflix<span onClick={()=>{
            setsingstate("Sign Up")
          }}>Sing Up Now</span></p>
          :<p>Already Have Account<span onClick={()=>{
            setsingstate("Sign In")
          }}>Sing In Now</span></p>}
          
          
        </div>
      </div>

   
      
    </div>
  )
}

export default Login 
