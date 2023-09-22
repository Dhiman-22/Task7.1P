import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const{isAuth}=useContext(AuthContext);

    if(!isAuth){
        alert("Kindly Do Login First");
        return <Navigate to="/login"/>
    }
  return children
}
