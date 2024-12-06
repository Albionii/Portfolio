import React from 'react'
import CSS from '../assets/skills/css.png'
import HTML from '../assets/skills/html.png'
import JAVA from '../assets/skills/java.svg'
import JS from '../assets/skills/js.svg'
import MYSQL from '../assets/skills/mysql.png'
import PHP from '../assets/skills/php.svg'
import REACT from '../assets/skills/react.png'
import SPRINGBOOT from '../assets/skills/spring boot.png'


export default function Skills({images=[CSS, HTML, JS, JAVA, MYSQL, PHP, REACT, SPRINGBOOT], titles=["CSS", "HTML", "JavaScript", "Java", "MySQL","PHP", "React", "Spring Boot"]}) {
  return (
    <div className='w-full flex flex-wrap justify-center bg py-3'>
      {
        images.map((img, index) => 
          <div key={index} className='flex justify-center items-center flex-col p-2 bg-slate-700 px-5 rounded-2xl transition ease-in-out duration-200 hover:bg-slate-600 m-6'>
            <img src={img} alt="" className='w-[55px] h-[55px] mb-2' />
            <p className='text-white'>{titles[index]}</p>
          </div>
        )
      }
    </div>
  )
}
