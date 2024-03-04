import React, { FC } from 'react';

import { cnArticle } from './Article.classname';

import './Article.css';

type ArticleProps = {

  red: number;
  green: number;
  blue: number;
  alpha: number;
  backgroundColor: {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  };
}


const Article: FC<ArticleProps> = ({ red, green, blue, alpha, backgroundColor }) => {
  const backgroundColorStyle = `rgba(${backgroundColor.red}, ${backgroundColor.green}, ${backgroundColor.blue}, ${backgroundColor.alpha})`;
  
  return (
    <div 
      className={cnArticle()}
      style={{ backgroundColor: backgroundColorStyle }}
      >
      <h2 className={cnArticle('Title')}>Тяни и крась</h2>
        
      <p 
        className={cnArticle('Text')}
        style={{
          color: `rgb(${red} ${green} ${blue} / ${alpha})`
        }}
      >
        Сделайте собственный контрол для выбора цвета, состоящий из четырех input type="range", 
        позволяющих настроить, соответственно, красный, зеленый и синий компонент итогового цвета + прозрачность.
      </p>

      <p 
        className={cnArticle('Text')}
        style={{
          color: `rgb(${red} ${green} ${blue} / ${alpha})`
        }}
      >
        В качестве пропсов компонент должен принимать четыре пропса начального значения цвета, 
        который предлагается настроить.
      </p>

      <p 
        className={cnArticle('Text')}
        style={{
          color: `rgb(${red} ${green} ${blue} / ${alpha})`
        }}
      >
        Сделайте простой компонент статьи — только заголовок и текст. 
        С помощью двух компонентов настройки цвета дайте возможность поменять цвет текста и цвет фона статьи.
      </p>

      <p 
        className={cnArticle('Text')}
        style={{
          color: `rgb(${red} ${green} ${blue} / ${alpha})`
        }}
      >
        Компоненты статьи и выбора цвета не должны быть вложены друг в друга.
      </p>
    </div>
  )
};

export { Article };