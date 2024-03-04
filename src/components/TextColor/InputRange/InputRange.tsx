import React, { FC, ChangeEvent } from 'react';

import { cnInputRange } from './InputRange.classname';
import { Article } from '../Article/Article';

import './InputRange.css';

type InputRangeProps = {
  onChange: (channel: string, event: ChangeEvent<HTMLInputElement>) => void,
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

const InputRange: FC<InputRangeProps> = ({ onChange, red, green, blue, alpha }) => {
  return (
    <div className={cnInputRange()}>
      <div className={cnInputRange('Container')}>
        <label className={cnInputRange('Label')}>R</label>
        <input 
          className={cnInputRange('Input')} 
          onChange={(event) => onChange('red', event)} 
          type="range" />

        <label className={cnInputRange('Label')}>G</label>
        <input 
          className={cnInputRange('Input')} 
          onChange={(event) => onChange('green', event)} 
          type="range" />

        <label className={cnInputRange('Label')}>B</label>
        <input 
          className={cnInputRange('Input')} 
          onChange={(event) => onChange('blue', event)} 
          type="range" />

        <label className={cnInputRange('Label')}>A</label>
        <input 
          className={cnInputRange('Input')} 
          onChange={(event) => onChange('alpha', event)} 
          type="range" />
      </div>
    </div>
  )
};

export { InputRange };