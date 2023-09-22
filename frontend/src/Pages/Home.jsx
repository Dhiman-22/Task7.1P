import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

export const Home = () => {
    const {token,name}=useContext(AuthContext);
    
    const [data,setData]=useState([])
    //getting the data from homepage
    useEffect(()=>{
        fetch("http://localhost:4500/home/",{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setData(res)
        })
        .catch(err=>console.log(err))
    },[])


  return (
    <h1>Hi {name}, Welcome to HomePage</h1>
  )
}
