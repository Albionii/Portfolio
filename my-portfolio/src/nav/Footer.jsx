import React from 'react'
import GITHUB from '../assets/social/github.png'
import LINKEDIN from '../assets/social/linkedin.png'

export default function Footer() {
  return (
    <div className='w-full flex justify-center flex-col items-center'>
      <p className='text-white'>Follow me on</p>
      <div className='flex'>
        <img src={GITHUB} alt="" className='w-[50px] h-[50px]' />
        <img src={LINKEDIN} alt="" className='w-[50px] h-[50px]'/>
      </div>

    </div>
  )
}
