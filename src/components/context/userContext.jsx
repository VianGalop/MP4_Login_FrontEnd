import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getPerfil } from '../../Api/data'

const ApiDataContext = createContext()

export const ApiDataProvider = ({children}) => {

  const [userData, setUserData] = useState({})
  const [isLogged, setIsLogged] = useState(false)
    
  const loginMutation = useMutation({
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
  },[])


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