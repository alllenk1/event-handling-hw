import React from 'react';
import type { FC } from 'react';

import { cnField } from './Field.classname';
import { Cockroach } from '../Game'

import './Field.css';

type GameFieldProps = {
  start: boolean;
  cockroachs: Cockroach[];
  onClick: (key: number) => void;
}

const Field: FC<GameFieldProps> = ({ start, cockroachs, onClick }) => { 
  return (
    <div className={cnField()}>
      {start && cockroachs.map((cockroach, index) => (
        cockroach.alive && (
          <img 
            className={cnField('Image')}
            key={index}
            onClick={() => onClick(index)} 
            src="./img/cockroach.png"
            alt="cockroach" 
            style={{
              top: cockroach.y,
              left: cockroach.x
            }}
          />
        )
      ))}
    </div>
  )
};

export { Field };