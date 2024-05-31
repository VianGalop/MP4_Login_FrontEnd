import React from 'react'
import {useMutation} from '@tanstack/react-query'
import google from '../assets/img/google.png'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import github from '../assets/img/github.png'
import gmail from '../assets/email.svg'
import pass from '../assets/pass.svg'
import dev from '../assets/dev.svg'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router'
/* import { useContext, useEffect } from 'react'
import { ApiDataContext } from "../components/context/userContext.jsx" */
import { sendLogin } from '../Api/data.js'

export const Login = () => {

  const navigate = useNavigate()
  
  const loginMutation = useMutation({
    mutationFn:sendLogin,
    onSuccess: (data) => {
      localStorage.setItem('token',data.token)
      navigate(`/perfil/see/${data.id}`)
    },
    onError: () => alert('Error de login')
    });

  const handleSubmit = (e) => {
    e.preventDefault()
   let [email, password] = e.target;
   loginMutation.mutate({
    email: email.value, 
    password: password.value
  });
  }
  /* useEffect(()=>{
    if(!isLogged) navigate('/login/create')
  },[isLogged])
 */
  return (
    <>
    <div className="container w-full h-screen flex flex-col items-center justify-center  ">
      <div className=" w-[374px] h-[500px] flex flex-col border-[1px] rounded-3xl mx-auto">
        <div className='flex-col pt-8 pb-8 px-8 gap-2'>
          <div className='flex flex-row pl-2 pr-4 ml-1'>
            <img src={dev}/>
          </div>
          <div className='m-2'>
            <h3 className='text-[18px] font-bold font-sans mb-4 mt-4 text-[#333333]'>Join thousands of learners from around the world</h3>
            <p className='text-sm mt-2 mb-2 font-sans text-[#333333]'>Master web development by making real-life projects. There are multiple paths for you to choose</p>
          </div>
            <form  className='m-2' onSubmit={handleSubmit}>
              <div className=' flex flex-row border-2 h-10 rounded-md mb-4 mt-4'>
                <img className='w-4 ml-2 mr-2' src={gmail}/>              
                <input type='email' name='email' id='email' placeholder="Email" className='w-full focus:outline-none'/>
              </div>
              <div className=' flex flex-row border-2 h-10 rounded-md'>
                <img className='w-4 ml-2 mr-2' src={pass}/>              
                <input type='password' name='password' id='password'placeholder="Password" className='w-full focus:outline-none'/>
              </div>
              <button type="submit" className='mb-4 mt-4 block w-full rounded-md bg-blue-600 px-6 pb-2 pt-2.5 text-sm font-sans leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out'>Start coding now</button>
            </form>
            
          <p className='flex-row mx-auto w-full text-center text-[14px] text-[#828282] mt-4 mb-4'>or continue with these social profile</p>
          <div className='m-2 flex flex-row gap-5 mx-auto items-center justify-center mt-4 mb-4'>
            <img src={google}/>
            <img src={facebook}/>
            <img src={twitter}/>
            <img src={github}/>            
          </div>
          <p className='flex-row mx-auto w-full text-center text-[14px] text-[#828282] mt-4 mb-4'>Adready a member? 
          <Link to="/login" className="text-blue-500">Register</Link>
          </p>
        </div>
      </div>
      <div className='flex flex-row  w-[360px] mx-auto text-center justify-between'>
        <p className='text-[14px] text-[#828282] mt-1 mb-4'>created by Vianey Galicia</p>
        <p className='text-[14px] text-[#828282] mt-1 mb-4'>devChallenges.io</p>
      </div>
     
    </div>
  </>

  )
}

