import react from 'react';
import { Slider } from '@mui/material';
import type { FC } from 'react';

import { cnTextColor } from './TextColor.classname';

import './TextColor.css';

const channelChecker = (channel: string, value: number) => 
  channel === 'alpha' ?  (1 - value / 100) : Math.ceil(value *= 2.55);

type TextColorProps = {
  onChange: (colorName: string, colorValue: number) => void
}

const TextColor: FC<TextColorProps> = ({ onChange }) => {
  const handleColor = (channel: string, event: Event, percent: number) => {
    const value = channelChecker(channel, percent);
    onChange(channel, value as number)
  }

  return (
    <div className={cnTextColor()}>
      <Slider
        onChange={(event, value) => 
          handleColor('red', event, value as number)}
        size="small"
        aria-label="Color"
      />

      <Slider
        onChange={(event, value) => 
          handleColor('green', event, value as number)}
        size="small"
        aria-label="Color"
      />

      <Slider
        onChange={(event, value) => 
          handleColor('blue', event, value as number)}
        size="small"
        aria-label="Color"
      />

      <Slider
        onChange={(event, value) => 
          handleColor('alpha', event, value as number)}
        size="small"
        aria-label="Color"
      />
    </div>
  )
}

export { TextColor }