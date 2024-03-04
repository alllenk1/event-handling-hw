import React, { FC } from 'react';

import { cnGameField } from './GameField.classname';
import { Cockroach } from '../Game'

import './GameField.css';

type GameFieldProps = {
  start: boolean;
  cockroachs: Cockroach[];
  onClick: (key: number) => void;
}

const GameField: FC<GameFieldProps> = ({ start, cockroachs, onClick }) => { 
  return (
    <div className={cnGameField()}>
      {start && cockroachs.map((cockroach, index) => (
        cockroach.alive && (
          <img 
            className={cnGameField('Image')}
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

export { GameField };