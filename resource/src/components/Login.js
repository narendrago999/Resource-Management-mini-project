import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './css/login.css'
export default function Login() {

  const navigate = useNavigate()
  
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const user={
      email,
      password
    }
    try {
      
      await axios.post("http://localhost:4040/login",user).then((req,res)=>{
        if(req.data.message==="login successfull"){
          alert("Login success")
          navigate("/Dashboard")
        }
        if(req.data.message==="Invalid password or email"){
          alert("Invalid password or email")
          navigate("/")
        }
        if(req.data.message==="User not registered, Please Register first"){
          alert("User not registered, Please Register first")
          navigate("/register")
        }
      })
    } catch (error) {
      
      console.log(error);
    }
  }




  return (
    <Fragment>

    <form className="login" method='POST' onSubmit={handleSubmit}>
      <div className="line">
        <div className='design'>

        <h1>LOGIN</h1>
        </div>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' /><br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' /><br />
      <input type="submit" value="Login" />
    <div className="link">
      <span>Click to </span>
      <Link to="/Register">Register</Link>
    </div>
      </div>
    </form>



    </Fragment>
  )
}
