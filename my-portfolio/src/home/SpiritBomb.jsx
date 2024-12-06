import React, { useState } from 'react';
import './test.css';


const SpiritBomb = () => {
  const [energyCircles, setEnergyCircles] = useState([]);

  const handleMouseDown = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newCircle = { id: Date.now(), x, y };
    setEnergyCircles((prev) => [...prev, newCircle]);

    // Remove the circle after animation duration
    setTimeout(() => {
      setEnergyCircles((prev) => prev.filter((circle) => circle.id !== newCircle.id));
    }, 1000); // Match this with CSS animation duration
  };

  return (
    <div
      className="relative w-full h-screen bg-gradient-to-b from-blue-500 to-black"
      onMouseDown={handleMouseDown}
    >
      {energyCircles.map((circle) => (
        <div
          key={circle.id}
          className="absolute bg-blue-400 rounded-full animate-burst"
          style={{
            top: circle.y,
            left: circle.x,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <img
          src="/path-to-goku-image.png"
          alt="Goku"
          className="w-32 h-auto animate-goku" // Use CSS animation here
        />
      </div>
    </div>
  );
};

export default SpiritBomb;
