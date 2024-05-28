import { Navbar } from '../components/Navbar'
import { useContext, useEffect } from 'react'
import { ApiDataContext } from '../components/context/userContext.jsx'

export const DataPerfil = () => {
  const {userData} = useContext(ApiDataContext)
  const dataStorage = localStorage.getItem('dataUser')

  return (
    <>
      <Navbar/>
      <div className='flex flex-col mt-2 mb-6 gap-1'>
        <h1 className="mx-auto text-[#000000] font-sans text-3xl ">Personal info</h1>
        <p className="mx-auto text-[#000000] font-sans text-lg">Basic info, like your name and photo</p>
      </div>
      <div  className="w-full h-full flex flex-col items-center justify-center mb-4 ">
        <div className=" w-[820px] h-full flex flex-col border-[1px] rounded mx-auto mb-0">
          <div className="flex flex-row border-b-[1px]">
            <div className="mt-2 mb-1 ml-7 w-[300px] h-[80px]">
              <label className="text-2xl text-[#000000]">Profile</label>
              <p className="text-sm text-[#828282]">Some info may be visible to other people</p>
            </div>         
            <spa className='w-[500px] grid grid-row place-content-around'>
              <button type="button" className="inline-block rounded-full border-2 px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-primary-700  text-[#828282]">Edit</button>
            </spa>            
          </div>
          <div className="flex flex-row py-4 justify-around border-b-[1px] ">
            <label className=" text-xs text-[#BDBDBD] w-[300px] ml-7">PHOTO</label>
            <span className="w-[500px] ml-0">
              <img alt="photo" />
            </span>
          </div> 
          <div className="flex flex-row py-4 justify-around border-b-[1px]">
            <label className=" text-xs text-[#BDBDBD] w-[300px] ml-7">NAME</label>
            <span className="w-[500px] ml-0">
              <p>Xanthe Neal</p>
            </span>            
          </div>

          <div className="flex flex-row py-4  justify-around border-b-[1px]">
            <label className=" text-xs text-[#BDBDBD] w-[300px] ml-7">BIO</label>
            <span className="w-[500px] ml-0">
              <p>I am a software developer and a big fan of devchallenges am a software developer and a big fan of devchallenges...</p>
            </span>     
          </div> 

          <div className="flex flex-row py-4  justify-around border-b-[1px]">
            <label className=" text-xs text-[#BDBDBD] w-[300px] ml-7">PHONE</label>
            <span className="w-[500px] ml-0">
              <p>908249274292</p>
            </span>    
          </div> 

          <div className="flex flex-row py-4 justify-around border-b-[1px]">
            <label className=" text-xs text-[#BDBDBD] w-[300px] ml-7">EMAIL</label>
            <span className="w-[500px] ml-0">
              <p>email@gmail.com</p>
            </span>    
          </div> 
          <div className="flex flex-row py-4 justify-around">
            <label className=" text-xs text-[#BDBDBD] w-[300px] ml-7">PASSWORD</label>
            <span className="w-[500px] ml-0">
              <p>***********</p>
            </span>   
          </div> 
        </div>
        <div className='flex flex-row  w-[820px] mx-auto text-center justify-between'>
          <p className='text-[14px] text-[#828282] mt-1 mb-4'>created by Vianey Galicia</p>
          <p className='text-[14px] text-[#828282] mt-1 mb-4'>devChallenges.io</p>
        </div>
      </div>   
    
    </>
  )
}
