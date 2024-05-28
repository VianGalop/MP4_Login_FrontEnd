import { useNavigate } from 'react-router-dom';
import dev from '../../assets/dev.svg'
import { ApiDataContext } from '../context/userContext';
import { useContext, useEffect } from 'react';


export const Navbar = () => {

  const dataStorage = localStorage.getItem('dataUser')
  const {userData} = useContext(ApiDataContext)
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!dataStorage){
      navigate('/login')
    }
  },[dataStorage, navigate])

  const hadleOut = () =>{
    localStorage.removeItem('dataUser')
    navigate('/login')
  }

  return (
    <nav className="mt-2 mr-20 ml-20 py-2 px-6">
        <ul className="flex justify-between">
          <li><img src={dev} alt="logo"/></li>
          <li className="flex flex-row gap-4">
            <img src='' alt='photo'/>
            <p>Nombre</p>
            {/* <a className='inline-block rounded-full bg-primary p-2 uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out'   href="#"
             role="button" id="dropdownMenuButton1" data-twe-dropdown-menu-ref
            aria-expanded="false">
              
              <svg fill="#333333" height="10px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 490.00 490.00" xmlSpace="preserve" stroke="#333333"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="245,456.701 490,33.299 0,33.299 "></polygon> </g>
              </svg>

            </a> */}
            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 active:">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            
            <div className="absolute right-0 z-10 mt-8 mr-20 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
           {/*  <!-- Active: "bg-gray-100", Not Active: "" --> */}
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2" onClick={hadleOut}>Sign out</a>
          </div>
          </li>
        </ul>
      </nav>
  )
}
