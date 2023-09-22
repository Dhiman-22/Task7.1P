import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

export const Signout = () => {
    const {logout,setToken}=useContext(AuthContext)

    setToken("");
    logout();

   

  return (
    <Navigate to="/"/>
  )
}
