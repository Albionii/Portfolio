
import React from 'react'
import './FlipCard.css'
import {useNavigate } from 'react-router-dom';

export default function ProjectParent({title="Titulli", img, desc="Pershkrimi", reverse=false, images, type, largeDesc, languages, link="https://www.google.com"}) {
  const navigate = useNavigate();
  
  return (
    <div className='flex flex-col m-5 w-1/2 bg-[#282f37] rounded-[15px] pb-5 hover:shadow-2xl'>
      <h1 className='text-center mb-5 mt-5 text-2xl text-[#12f7d6]'>{title}</h1>
      <div className={'flex justify-around w-full ' +  (reverse ? "flex-row-reverse" : "")} >
        <div className='flex flex-col w-1/2 break-words justify-center whitespace-normal text-white mx-5  lg:text-[12px] xl:text-[15px]'>
          <span>{desc}</span>
        </div>
        <div className='flex justify-center mx-2 items-center w-1/2' 
          onClick={()=>navigate("/project", 
            {state : {
                title:title, 
                desc:desc, 
                images:images, 
                type:type, 
                largeDesc:largeDesc, 
                languages:languages, 
                link:link
            }})}>
          <img src={img} alt="Fotoja" className={'rounded-[15px]'}/>
        </div>
      </div>
    </div>
  )
}
