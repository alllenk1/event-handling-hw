import React, { FC, MouseEvent } from 'react';

import { cnProgressBar } from './ProgressBar.classname';

import './ProgressBar.css';

type ProgressBarProps = {
  progress: number;
  onMouseDown: (event: MouseEvent) => void;
  onMouseUp: (event: MouseEvent) => void;
  onMouseMove: (event: MouseEvent) => void;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress, onMouseDown, onMouseUp, onMouseMove }) => {
  return (
    <div 
      className={cnProgressBar()}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove} 
      >
        <p className={cnProgressBar('Counter')}>{progress}%</p>
        <div className={cnProgressBar('Progress')} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export { ProgressBar };