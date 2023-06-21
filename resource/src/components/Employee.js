import axios from 'axios'
import './css/login.css';
import React, { Fragment, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
export default function Employee() {


    
//   const navigate = useNavigate()

  const [name, setName]= useState("")
  const [desc, setDesc]= useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const employee={
      name,
      desc
    }
    try {
      
      await axios.post("http://localhost:4040/employee",employee).then((req,res)=>{
        if(req.data.message === "Employee already exists"){
          alert("Employee already exists")
        }
        if(req.data.message==="Employee Created"){
          alert("Employee Created")
        }
      })
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Fragment>
    <form className="employee" method='POST'  onSubmit={handleSubmit} >
      <div className='line'>
        <h2>Add New Employee</h2>
      <input type="text" value={name} placeholder='Enter Name'  onChange={(e)=>{setName(e.target.value)}} /><br />
      <input type="text" placeholder='Employee Description' value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
      <input type="submit" value="Add Employee" />
      </div>
    </form>
  </Fragment>
  )
}
