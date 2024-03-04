import React, { MouseEvent, useState } from 'react';

import { cnLoader } from './Loader.classname';
import { ProgressBar } from './ProgressBar/ProgressBar';

import './Loader.css';

const calculatePercent = (total: number, part: number): number => {
  const currentPercent = Math.round((part * 100) / total);
  return part >= total ? 100 : currentPercent;
}

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isMouseActive, setMouseActive] = useState(false);

  const handleMouseDown = () => {
    setMouseActive(true);
  }

  const handleMouseUp = () => {
    setMouseActive(false);
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (isMouseActive) {
      let currentPosition = event.clientX;
      const loaderWidth = event.currentTarget.clientWidth;
      const currentPercent = calculatePercent(loaderWidth, currentPosition);

      setProgress(currentPercent);
    }
  }

  return (
    <div className={cnLoader()}>
      {
        progress < 100 ? 
          <ProgressBar 
            progress={progress} 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          />
        : 
          <img 
            className={cnLoader('Image')} 
            src="./img/progress.jpeg" 
            alt="100% progress" 
            width="400"
          />
      } 
    </div>
  )
};

export { Loader };