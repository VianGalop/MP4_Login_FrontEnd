import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const ApiDataContext = createContext()

export const ApiDataProvider = ({children}) => {

  const [userData, setUserData] = useState()
  const [isLogged, setIsLogged] = useState(false)
    
  const enterLogin = async ({ email, password }) => {
    const res = await axios.post('http://localhost:3000/login/enter', {
        email,
        password,
    });

    setUserData(res.data.data)
    localStorage.setItem('token', JSON.stringify(res.data.token));
    setIsLogged(true)
  };
  
  const createLogin = async({email, password}) =>{
      const response = await axios.post('http://localhost:3000/login/create', {
          email,
          password,
      });

      setUserData(response.data.data)
      localStorage.setItem('token', JSON.stringify(response.data.token));
      setIsLogged(true)
  };

  useEffect(()=>{
    if (userData) {
      setIsLogged(true)
    }
  },[userData])


  return (
    <ApiDataContext.Provider 
    value = {{ 
      enterLogin, 
      userData, 
      setUserData, 
      isLogged, 
      setIsLogged, 
      createLogin}
    }>
        {children}
    </ApiDataContext.Provider>
  )
}

export { ApiDataContext}