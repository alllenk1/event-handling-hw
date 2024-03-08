import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

import { cnTextColor } from './TextColor.classname';
import { Article } from './Article/Article';
import { InputRange } from './InputRange/InputRange';

import './TextColor.css';

const DEFAULT_COLOR = {
  red: 0,
  green: 0,
  blue: 0,
  alpha: 1
}

const DEFAULT_BACKGROUNDCOLOR = {
  red: 255,
  green: 255,
  blue: 255,
  alpha: 1
}

const channelChecker = (channel: string, value: number) => 
  channel === 'alpha' ?  value /= 100 : value *= 2.55;

const TextColor = () => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUNDCOLOR);

  const handleColor = (channel: string, event: ChangeEvent<HTMLInputElement>) => {
    const value = channelChecker(channel, Number(event.currentTarget.value));

    setColor({ ...color, [channel]: value });
  }

  const handleBackgroundColor = (channel: string, event: ChangeEvent<HTMLInputElement>) => {
    const value = channelChecker(channel, Number(event.currentTarget.value));

    setBackgroundColor({ ...backgroundColor, [channel]: value });
  }

  return (
    <div className={cnTextColor()}>
      <Article 
        backgroundColor={backgroundColor}
        color={color}
      />
      
      <div className={cnTextColor('Settings')}>
        <InputRange
          onChange={handleColor}
        />
        <InputRange
          onChange={handleBackgroundColor}
        />
      </div>
    </div>
  )
};

export { TextColor };