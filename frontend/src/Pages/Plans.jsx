import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Plans = () => {

    const navigate = useNavigate()

const handleFree =()=>{
     navigate("/home")
}
const handlePay =()=>{
     navigate("/payment")
}

  return (
    <div style={{width:"70%",margin:"auto",border:"1px solid red",marginTop:"50px",padding:"20px"}}>
    <h1 onClick={handleFree} style={{width:"95%",padding:"20px",textAlign:"center",border:"1px solid green"}}>
       If you want to go with <span style={{color:"red"}}>Free</span> Plan.
    </h1>
    <h1 onClick={handlePay} style={{width:"95%",padding:"20px",textAlign:"center",border:"1px solid green"}}>
      If you want to go with premium plan pay USD1000.
    </h1>
    </div>
  )
}
