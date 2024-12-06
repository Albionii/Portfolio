import React from 'react';
import namek from '../assets/namek.mp4';
import Sprites from './Sprites';
import Projects from './Projects';
import SpiritBomb from './SpiritBomb';
import Skills from './Skills';


export default function Index() {
  return (
    <div className='bg-blue-300'>
      {/* <div className="overflow-hidden h-screen relative">
        <video 
          src={namek}
          autoPlay 
          // loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute z-10 w-full flex items-center justify-center h-full">
          <Sprites/>
        </div>
      </div> */}
  
      <Projects/>
      <Skills/>
    </div>
  );
}
