import React from 'react';

import { cnApp } from './App.classname';
import { Loader } from './components/Loader/Loader';
import { Game } from './components/Game/Game';
import { TextColor } from './components/TextColor/TextColor';

import './App.css';

const App = () => {
  return (
    <div className={cnApp()}>
      <h1 className={cnApp('Title')}>8.2 Обработка событий в React (HW)</h1>

      <h2 className={cnApp('Task-title')}>Драг энд лоад</h2>
        <Loader />

      <h2 className={cnApp('Task-title')}>Лапкаканы</h2>
        <Game />

      <TextColor />
    </div>
  );
}

export { App };
