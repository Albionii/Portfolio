import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './home/Index';
import Project from "./home/Project";
import { useEffect, useState } from "react";


import ReactLoading from 'react-loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])

  return (
    !isLoading ?(
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/project" element={<Project/>}/>
          
        </Routes>
      </Router>     
    </div>
    ):(
      <div className="flex justify-center items-center bg-violet-900 h-screen">
        <div className="w-full flex justify-center">
          <ReactLoading type='spinningBubbles' width={'20%'} height={'20%'}  color="red"/>
        </div>
      </div>
    )
    
  )
}

export default App
