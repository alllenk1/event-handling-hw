import React, { ChangeEvent, useState } from 'react';

import { cnTextColor } from './TextColor.classname';
import { Article } from './Article/Article';
import { InputRange } from './InputRange/InputRange';

import './TextColor.css';

const initialColor = {
  red: 0,
  green: 0,
  blue: 0,
  alpha: 1
}

const initialBackground = {
  red: 255,
  green: 255,
  blue: 255,
  alpha: 1
}

const TextColor = () => {
  const [color, setColor] = useState(initialColor);
  const [backgroundColor, setBackgroundColor] = useState(initialBackground);

  const handleColor = (channel: string, event: ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.currentTarget.value);
    if (channel === 'alpha') {
      value /= 100;
    } else {
      value *= 2.55;
    }
    setColor({ ...color, [channel]: value });
  }

  const handleBackgroundColor = (channel: string, event: ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.currentTarget.value);
    if (channel === 'alpha') {
      value /= 100;
    } else {
      value *= 2.55;
    }
    setBackgroundColor({ ...backgroundColor, [channel]: value });
  }

  return (
    <div className={cnTextColor()}>
      <Article 
        backgroundColor={backgroundColor}
        red={color.red} 
        green={color.green} 
        blue={color.blue} 
        alpha={color.alpha}/>
      
      <div className={cnTextColor('Settings')}>
        <InputRange
          onChange={handleColor}
          red={color.red} 
          green={color.green} 
          blue={color.blue} 
          alpha={color.alpha}
        />
        <InputRange
          onChange={handleBackgroundColor}
          red={backgroundColor.red}  
          green={backgroundColor.green} 
          blue={backgroundColor.blue} 
          alpha={backgroundColor.alpha}
        />
      </div>
    </div>
  )
};

export { TextColor };