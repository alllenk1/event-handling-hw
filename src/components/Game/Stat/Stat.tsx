import React, { FC } from 'react';

import { cnStat } from './Stat.classname';

import './Stat.css';

type StatProps = {
  time: number;
}

const Stat: FC<StatProps> = ({ time }) => {
  return (
    <div className={cnStat()}>
      <h3 className={cnStat('Title')}>Победа!</h3>
      <p className={cnStat('Time')}>{`Ваше время: ${time.toFixed(1)} секунд`}</p>
    </div>
  )
};

export { Stat };