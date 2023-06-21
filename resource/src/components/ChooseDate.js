import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export default function ChooseDate() {


  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id);
  const [date, setDate]= useState([])
  const [employee, setEmployee]= useState("")


  useEffect(()=>{
    async function getsingleEmployee(){
      await axios.get(`http://localhost:4040/singleemployee/${id}`).then((req,res)=>{
        if (req.data.message==="success"){
          setEmployee(req.data.employee)
        }
      })
    }
    getsingleEmployee()
  })



  async function handleSubmit(id,e){
    e.preventDefault()
    const data={
      employee,
      date
    }
    try {
      
      await axios.post(`http://localhost:4040/choosedate/${id}`,data).then((req,res)=>{
        if(req.data.message==="success"){
          navigate("/Dashboard")
        }
        if(req.data.message==="fail"){
          alert("minimum 7 day to assign")
        }
        if(req.data.message==="billsuccess"){
          alert("billed")
          navigate("/Dashboard")
        }
      })
    } catch (error) {
      
      console.log(error);
    }
  }





  return (
    <Fragment>

    <form className="login" >
      <div className="line">
        <h1>Choose Date</h1>
        <p>{employee.name}</p>
        <p>{employee.desc}</p>
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder='Enter Date' /><br />
    
      <button onClick={(e)=>handleSubmit(employee._id,e)}>Select Date</button>
      </div>
    </form>



    </Fragment>
  )
}
