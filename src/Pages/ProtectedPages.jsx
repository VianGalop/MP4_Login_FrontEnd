import React, { useContext } from 'react'
import {ApiDataContext} from '../components/context/userContext.jsx'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedPages = () => {

  const { isLogged } = useContext(ApiDataContext)  

  if(!isLogged) return <Navigate to="/login" replace />

  return (
    <Outlet/>
  )
}
