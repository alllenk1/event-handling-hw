import React, { useState } from 'react';

import { cnApp } from './App.classname';
import { Loader } from './components/Loader/Loader';
import { Game } from './components/Game/Game';
import { TextColor } from './components/TextColor/TextColor';
import { Article } from './components/Article/Article';

import './App.css';

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

const App = () => {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUNDCOLOR);
  
  const handleProgress = (newProgressValue: number) => 
    setProgress(newProgressValue)
  
  const handleColor = (colorName: string, colorValue: number) => {    
    setColor((prev) => ({
      ...prev,
      [colorName]: colorValue
    }))
  }

  const handleBackgroundColor = (colorName: string, colorValue: number) => {    
    setBackgroundColor((prev) => ({
      ...prev,
      [colorName]: colorValue
    }))
  }

  return (
    <div className={cnApp()}>
      <h1 className={cnApp('Title')}>8.2 Обработка событий в React (HW)</h1>

      <h2 className={cnApp('Task-title')}>Драг энд лоад</h2>
        {progress < 100 ? (
          <Loader onChange={handleProgress} />
        ) : (
          <img src="./img/progress.jpeg" alt="100% progress" width="400"/>
        )}

      <h2 className={cnApp('Task-title')}>Лапкаканы</h2>
        <Game />

      <h2 className={cnApp('Task-title')}>Тяни и крась</h2>
        <Article 
          color={color}
          backgroundColor={backgroundColor}
        />

        <div className={cnApp('TextColor-block')}>
          <TextColor 
            onChange={handleColor}
          />

          <TextColor 
            onChange={handleBackgroundColor}
          />
        </div>
    </div>
  );
}

export { App };
