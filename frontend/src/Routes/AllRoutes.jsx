import React from 'react';
import { Signup } from "../Pages/Signup";
import { Route,Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Notes } from "../Pages/Notes";
import { LandingPage } from "../Pages/LandingPage";
import { Home } from "../Pages/Home";
import { PrivateRoute } from './PrivateRoute';
import { Signout } from '../Pages/Signout';
import { Plans } from '../Pages/Plans';
import StripeContainer from '../components/StripeContainer';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Signout/>}/>
        <Route path="/notes" element={<PrivateRoute><Notes/></PrivateRoute>}/>
        <Route path="/plans" element={<PrivateRoute><Plans/></PrivateRoute>}/>
        <Route path="/payment" element={<PrivateRoute><StripeContainer/></PrivateRoute>}/>

      </Routes>
    </div>
  )
}
