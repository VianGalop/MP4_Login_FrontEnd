import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getPerfil, sendLogin } from '../../Api/data'
import { useNavigate } from 'react-router-dom'

const ApiDataContext = createContext()

export const ApiDataProvider = ({children}) => {

  const [userData, setUserData] = useState({})
  const [isLogged, setIsLogged] = useState(false)
    
  /* const loginMutation = useMutation({
    mutationFn:getPerfil,
    onSuccess: (datos) => {
      setIsLogged(datos.token)
      if(datos.token){
        setIsLogged(true)
        setUserData(datos)
      }
    },
    onError: () => alert('Error de login')
  });

  useEffect(()=>{
    loginMutation();
  },[]) */
  

  const navigate = useNavigate()  
  
  const loginMutation = useMutation({
    mutationFn:sendLogin,
    onSuccess: (data) => {
      if(data.token){
        setUserData()
      }
      localStorage.setItem('token',data.token)
      navigate(`/perfil/see/${data.id}`)
    },
    onError: () => alert('Error de login')
    });


  return (
    <ApiDataContext.Provider 
    value = {{
      userData, 
      setUserData,
      isLogged, 
      setIsLogged 
      }
    }>
        {children}
    </ApiDataContext.Provider>
  )
}

export { ApiDataContext}