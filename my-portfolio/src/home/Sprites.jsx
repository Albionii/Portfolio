import React, { useState, useEffect } from 'react';
import goku0 from '../assets/sprites/goku/0.png';
import goku3 from '../assets/sprites/goku/3.png';
import goku5 from '../assets/sprites/goku/5.png';
import goku6 from '../assets/sprites/goku/6.png';
import goku7 from '../assets/sprites/goku/7.png';
import goku8 from '../assets/sprites/goku/8.png';
import goku9 from '../assets/sprites/goku/9.png';
import goku10 from '../assets/sprites/goku/10.png';
import goku12 from '../assets/sprites/goku/12.png';
import goku13 from '../assets/sprites/goku/13.png';
import goku14 from '../assets/sprites/goku/14.png';
import goku15 from '../assets/sprites/goku/15.png';

const gokuIdle = [goku0];

const gokuSpiritBomb = [
  goku5,
  goku6,
  goku7,
  goku8,
  goku9,
  goku10,
  goku12,
  goku13,
  goku14,
  goku15,
];

const SpriteAnimator = ({ frames, fps = 12,index }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    setCurrentFrame(0);

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [frames, fps]);


  return (
      <img
        key={index}
        src={frames[currentFrame] === undefined ? frames[0] : frames[currentFrame]}
        alt="Sprite Animation"
        className="relative w-20 h-20 scale-x-[-1]"
      />
  );
};

export default function Sprites() {
  const [gokuFrames, setGokuFrames] = useState(gokuIdle);
  const [index, setIndex] = useState(0);
  const handleMouseDown = () => {
    setIndex((i) => i+1);
    setGokuFrames([...gokuSpiritBomb]);
  };
  
  const handleMouseUp = () => {
    setIndex((i) => i+1);
    setGokuFrames([...gokuIdle]);
  };

  return (
    <div
      className="absolute right-32 top-60"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <SpriteAnimator frames={gokuFrames} fps={10} index={index} />
    </div>
  );
}
