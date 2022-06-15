import React from 'react'
import Login from '../Login/Login'
import {
    BrowserRouter as Router,
    Route,
    BrowserRouter,
    Routes,
    useHistory,
    Outlet
  } from "react-router-dom";
function Auth() {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default Auth