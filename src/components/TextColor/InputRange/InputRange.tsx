import React from 'react';
import type { FC, ChangeEvent } from 'react';

import { cnInputRange } from './InputRange.classname';

import './InputRange.css';

type InputRangeProps = {
  onChange: (channel: string, event: ChangeEvent<HTMLInputElement>) => void,
}
 
const InputRange: FC<InputRangeProps> = ({ onChange }) => {
  return (
    <div className={cnInputRange()}>
      <div className={cnInputRange('Container')}>
        <label className={cnInputRange('Label')} htmlFor="red">R</label>
        <input 
          className={cnInputRange('Input')} 
          onChange={(event) => onChange('red', event)} 
          name="red"
          type="range" 
        />

        <label className={cnInputRange('Label')} htmlFor="green">G</label>
        <input 
          className={cnInputRange('Input')} 
          onChange={(event) => onChange('green', event)} 
          name="green"
          type="range" 
        />

        <label className={cnInputRange('Label')} htmlFor="blue">B</label>
        <input 
          className={cnInputRange('Input')} 
          onChange={(event) => onChange('blue', event)} 
          name="blue"
          type="range" 
        />

        <label className={cnInputRange('Label')} htmlFor="alpha">A</label>
        <input 
          className={cnInputRange('Input')} 
          onChange={(event) => onChange('alpha', event)}
          name="alpha"
          type="range" />
      </div>
    </div>
  )
};

export { InputRange };