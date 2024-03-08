import React, { useState } from 'react';
import { Button } from '@mui/material'

import { cnGame } from './Game.classname';
import { Field } from './Field/Field';
import { Stat } from './Stat/Stat';

import './Game.css';

const randomPosition = () => Math.floor(Math.random() * 500);

type Cockroach = {
  index: number;
  x: number;
  y: number;
  alive: boolean;
}

const initialCockroachs = Array.from({ length: 10 }, (_, index) => ({
  index,
  x: randomPosition(),
  y: randomPosition(),
  alive: true,
}));

const Game = () => {
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [finishTime, setFinishTime] = useState(0);
  const [cockroachsState, setCockroachsState] = useState<Cockroach[]>(initialCockroachs);

  const totalTime = (finishTime - startTime) / 1000;

  const handleUpdateGame = () => {
    setCockroachsState(prev => 
      prev.map(cockroach => ({
        ...cockroach,
        x: randomPosition(),
        y: randomPosition(),
        alive: true
      }))  
    );
    setStart(true);
    setFinish(false);
    setStartTime(Date.now());
  };

  const handleRemoveCockroach = (index: number) => {
    setCockroachsState(prev =>
      prev.map(cockroach => {
        if (cockroach.index === index) {
          return {
            ...cockroach,
            alive: false,
          };
        } else {
          return cockroach;
        }
      })
    );

    setCockroachsState(prev => {
      const allRemoved = prev.every(cockroach => !cockroach.alive);
      if (allRemoved) {
        setFinish(true);
        setFinishTime(Date.now());
      }
      return prev;
    });
  };

  return (
    <div className={cnGame()}>
      <Field 
        start={start} 
        cockroachs={cockroachsState} 
        onClick={handleRemoveCockroach}
      />
      <div className={cnGame('Button')}>
        <Button 
          onClick={handleUpdateGame}
          variant="outlined">
          Contained
        </Button>
      </div>
      
      {finish && <Stat time={totalTime} />}
    </div>
  )
};

export { Game };
export type { Cockroach };