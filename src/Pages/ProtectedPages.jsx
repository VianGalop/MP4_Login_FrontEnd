import React, { useContext } from 'react'
import {ApiDataContext} from '../components/context/userContext.jsx'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedPages = () => {

  const { isLogged } = ApiDataContext()  

  if(!isLogged) return <Navigate to="/login/enter" replace />

  return (
    <Outlet/>
  )
}
