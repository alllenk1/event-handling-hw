import React, { useState } from 'react';
import type { FC, MouseEvent } from 'react';

import { cnLoader } from './Loader.classname';
import { ProgressBar } from './ProgressBar/ProgressBar';

import './Loader.css';

type LoaderProps = {
  onChange: (newProgressValue: number) => void
}

const calculatePercent = (total: number, part: number): number => {
  const currentPercent = Math.round((part * 100) / total);
  return part >= total ? 100 : currentPercent;
}

let currentPercent: number = 0;

const Loader: FC<LoaderProps> = ({ onChange }) => {
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
      currentPercent = calculatePercent(loaderWidth, currentPosition);

      onChange(currentPercent);
    }
  }

  return (
    <div className={cnLoader()}>
      <ProgressBar 
        progress={currentPercent} 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
    </div>
  )
};

export { Loader };