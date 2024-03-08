import react from 'react';
import type { FC } from 'react';

import { cnArticle } from './Article.classname';

import './Article.css';

type ArticleProps = {
  color: {
    red: number,
    green: number,
    blue: number,
    alpha: number
  },

  backgroundColor: {
    red: number,
    green: number,
    blue: number,
    alpha: number
  },
}

const Article: FC<ArticleProps> = ({ color, backgroundColor }) => {
  return (
    <div 
      className={cnArticle()}
      style={{
        color: `rgba(
          ${color.red}, 
          ${color.green}, 
          ${color.blue}, 
          ${color.alpha})
        `,
        backgroundColor: 
          `rgba(
            ${backgroundColor.red}, 
            ${backgroundColor.green}, 
            ${backgroundColor.blue}, 
            ${backgroundColor.alpha})
          `
      }}  
    >
      <p className={cnArticle('Paragraph')}>
        Сделайте собственный контрол для выбора цвета, 
        состоящий из четырех input type="range", 
        позволяющих настроить, соответственно, красный, зеленый 
        и синий компонент итогового цвета + прозрачность.
      </p>

      <p className={cnArticle('Paragraph')}>
        В качестве пропсов компонент должен принимать четыре пропса 
        начального значения цвета, который предлагается настроить.
      </p>

      <p className={cnArticle('Paragraph')}>
        Сделайте простой компонент статьи — только заголовок и текст. 
        С помощью двух компонентов настройки цвета дайте возможность 
        поменять цвет текста и цвет фона статьи.
      </p>

      <p className={cnArticle('Paragraph')}>
       Компоненты статьи и выбора цвета не должны быть вложены 
       друг в друга.
      </p>
    </div>
  )
}

export { Article };