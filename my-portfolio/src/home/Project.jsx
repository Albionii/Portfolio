import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../nav/Footer';

export default function Project() {
  const {state} = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <div className='flex flex-col w-full bg-[#282f37] rounded-[15px] pb-5'>
      <div className='flex'>
        <div className='w-1/2 ml-2'>
          <p className='text-[15px] text-white italic'>{state.type}</p>
          <h1 className='text-[45px] text-[#12f7d6]'>{state.title}</h1>
          <p className='text-justify text-white text-[18px] mt-10'>{state.largeDesc}</p>
          <h1 className='text-[40px] text-[#12f7d6] mt-7'>Technology Used</h1>
          <div className='flex items-center gap-x-[100px] flex-wrap'>
            {state.languages.map((l, index) => 
              <img key={index} src={l} className='w-[55px] hover:animate-pulse' />
            )}
          </div>
          <div className='w-full text-right mt-6'>
            <a href={state.link} target='_blank' className='w-full'>
              <i><u className='text-white hover:text-[#12f7d6] transition ease-in-out duration-200'>Go to Project <span className='text-[20px]'>→</span></u></i>
            </a>
          </div>
        </div> 
        <div className='flex flex-col w-1/2 justify-center items-center'>
          {state.images.map((img, index) => 
            <img key={index} src={img} className='w-2/3 mt-5' />
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
