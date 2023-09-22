


import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider'
 


export const Navbar = () => {
    const {isAuth}=useContext(AuthContext)
// const links = [
//     {path:"/",title:"DEV@Deakin"},   
//     {path:"/home",title:"Home Page"},
//     {path:"/notes",title:"Notes Page"},
//     {path:"/login",title:"Login Page"},
//     {path:"/signup",title:"Register Page"},
//     {path:"/logout",title:isAuth?"LogOut":null}
// ]
  return (
    <div style={{display:"flex",alignment:"center",justifyContent:"space-around",padding:"10px",background:"#c7c5c5"}}> 
        {/* {links.map((link)=>{
   return <Link style={{textDecoration:"none"}} key={link.path} to={link.path}>{link.title}</Link>
        })} */}
                <div><Link style={{textDecoration:"none"}} to="/"><b>DEV@Deakin</b></Link></div>
                <div style={{width:"40%"}}><input style={{width:"100%",overflow:"hidden"}} placeholder='Search...'/></div>
                <div><Link style={{textDecoration:"none"}} to="/login">Login</Link></div>
                <div><Link style={{textDecoration:"none"}} to="/signup">Signup</Link></div>
             {isAuth?<div><Link style={{textDecoration:"none"}} to="/logout">Signout</Link></div>:null}
    </div>
  )
}
