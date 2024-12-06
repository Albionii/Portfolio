import React, { useEffect } from 'react'

import chess1 from '../assets/project-images/Shahu/chess1.PNG'
import chess2 from '../assets/project-images/Shahu/chess2.PNG'
import chess3 from '../assets/project-images/Shahu/chess3.PNG'

import auto1 from '../assets/project-images/AutoSallon/auto1.PNG'
import auto2 from '../assets/project-images/AutoSallon/auto2.PNG'
import auto3 from '../assets/project-images/AutoSallon/auto3.PNG'

import ums1 from '../assets/project-images/UMS/ums1.jpg'
import ums2 from '../assets/project-images/UMS/ums2.jpg'
import ums3 from '../assets/project-images/UMS/ums3.jpg'
import ums4 from '../assets/project-images/UMS/ums4.jpg'

import CSS from '../assets/skills/css.png'
import HTML from '../assets/skills/html.png'
import JAVA from '../assets/skills/java.svg'
import JS from '../assets/skills/js.svg'
import MYSQL from '../assets/skills/mysql.png'
import PHP from '../assets/skills/php.svg'
import REACT from '../assets/skills/react.png'
import SPRINGBOOT from '../assets/skills/spring boot.png'


import ProjectParent from './ProjectParent'


export default function Projects() {




  return (
    <div className="w-full h-full flex justify-center flex-col items-center">
      <ProjectParent 
        title={"Chess Game"}
        type={"Java App"} 
        img={chess1} 
        images={[chess1, chess2, chess3]}
        desc={"A simple chess game with all modern rules of the game. It can be played by two players on the same computer, hoping in the future to make it online with socked"}
        largeDesc={"Chess Game is a 2 player game I made using Object Oriented Language Java. Using Sockets, when one player opens the game it waits for the second player. When both are ready the game starts with the color placed randomly. Hardcoded are put the ports that the player should access to in the same network, but it can be changed if you change the values to some proxy server."}
        link={"https://github.com/Albionii/ChessGame"}
        languages={[JAVA]}
      />

      <ProjectParent 
        title={"AutoSalon Sara"}
        type={"Website"} 
        img={auto1}
        images={[auto1, auto2, auto3]}
        reverse={true}
        desc={"A website project to buy or rent cars from an auto salon."}
        largeDesc={"AutoSalon is a dynamic car dealership website that allows users to browse, sell, or rent vehicles. It features an intuitive interface developed using HTML, CSS, and JavaScript for seamless navigation. The backend, powered by PHP and MySQL, manages user data and vehicle listings efficiently. It has admin and client panel, in admin panel you can add, delete, or update images and media in the webpage, and as a client you can send message or feedback to the owner of the website."}
        link={"https://autosallonsara.com/"}
        languages={[HTML,CSS, JS, PHP, MYSQL]}
      />

      
      <ProjectParent 
        title={"Student Management System"} 
        type={"Web App"}
        img={ums2} 
        images={[ums1, ums2, ums3, ums4]}
        desc={"Made a system for managing students, professors and classes, inspired by the SMIS of UBT and SEMS of UP."}
        largeDesc={
          `The Student Management System is a comprehensive platform designed to track and manage student activities and academic performance. Built using Spring Boot for the backend, React for the frontend, and MySQL for data storage, it enables users to log in as students, professors, or admins, each with specific privileges. Inspired by the SMIS of University of Business and Technology, we tried to make
          it better by integrating some features which students needed to used in multiple platforms. Inside one platform now students can check their grades, enroll in classes, comment and react on professor's posts on a topic, instead of emailing them etc.`
      }
        link={"https://github.com/Albionii/Sistemi-per-Menaxhimin-e-Studenteve-dhe-Lendeve"}
        languages={[SPRINGBOOT, JAVA, REACT, JS, MYSQL]}
      />

    </div>
  )
}
