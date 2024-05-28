import back from '../assets/back.svg'

export const NewPerfil = () => {
  return (
    <>
        <div className="w-full flex flex-col items-around justify-center mb-4">
        <div className="w-[820px] h-full flex flex-row mx-auto mb-0">          
          <a href='#' className=" flex text-blue-600 hover:text-blue-800">
            <img src={back} className="w-5"/>
            Back</a>
        </div>       
      </div>
      <div  className="w-full h-full flex flex-col items-center justify-center mb-4 ">
        <div className=" w-[820px] h-full flex flex-col border-[1px] rounded mx-auto mb-0">
          <div className="flex flex-row mt-6">
            <div className="mt-2 mb-1 ml-10 w-[300px] h-[80px]">
              <label className="text-2xl text-[#000000]">Change Info</label>
              <p className="text-sm text-[#828282]">Changes will be reflected to every services</p>
            </div>                
          </div>
          <div className="flex flex-row py-4 ml-10 ">
            <img alt="photo" className="w-[60px] h-[60px] mr-2 rounded border-2"/>
            <button className=" ml-7text-xs text-[#828282] py-2 mx-2 hover:list-inside">CHANGE PHOTO</button>
          </div> 

          <div className="flex flex-col py-4 ml-10 ">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">NAME</label>
            <span className="flex flex-row w-2/4 border-2 h-10 rounded-[12px]">
              <input type="text" placeholder='Enter your name...' className="w-full focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>

          <div className="flex flex-col py-4 ml-10 ">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">BIO</label>
            <span className="flex flex-row w-2/4 border-2 rounded-[12px]">
              <input type="text" placeholder='Enter your bio...' className="w-full h-[80px] focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>


          <div className="flex flex-col py-4 ml-10 ">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">PHONE</label>
            <span className="flex flex-row w-2/4 border-2 h-10 rounded-[12px]">
              <input type="number" placeholder='Enter your phone...'  className="w-full focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>

          <div className="flex flex-col py-4 ml-10 ">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">EMAIL</label>
            <span className="flex flex-row w-2/4 border-2 h-10 rounded-[12px]">
              <input type="email" placeholder='Enter your email...'  className="w-full focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>
          <div className="flex flex-col py-4 ml-10 ">
            <label className=" text-xs text-[#4F4F4F] w-[300px] ml-2 mb-1">PASSWORD</label>
            <span className="flex flex-row w-2/4 border-2 h-10 rounded-[12px]">
              <input type="password" placeholder='Enter your new password...' className="w-full focus:outline-none rounded-[12px]"></input>
            </span>            
          </div>
          <div className='flex flex-row  py-4 ml-10 my-2'>
            <button type="button"  className="inline-block rounded-md bg-blue-600 px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out">Save</button>
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
