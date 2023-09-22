
import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [token,setToken]=useState("");
    const[isAuth,setIsAuth]=useState(false);
    const [name,setName]=useState("");

    const login=()=>{
        setIsAuth(true)
    }

    const logout=()=>{
        setIsAuth(false)
    }

  return (
    <AuthContext.Provider value={{isAuth,login,logout,setToken,token,setName,name}}>
        {children}
    </AuthContext.Provider>
  )
}
