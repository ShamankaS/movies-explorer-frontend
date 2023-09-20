import React from "react";
import './Portfolio.css';

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__items">
          <li className="portfolio__item">
            <p className="portfolio__item-title">Статичный сайт</p>
            <a
              className="portfolio__item-icon"
              href="https://shamankas.github.io/how-to-learn/"
              target='_blank'
              rel="noreferrer"
              title="Ссылка на Github Pages с проектом"
            >
              &#8599;
            </a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__item-title">Адаптивный сайт</p>
            <a
              className="portfolio__item-icon"
              href="https://shamankas.github.io/russian-travel/"
              target='_blank'
              rel="noreferrer"
              title="Ссылка на Github Pages с проектом"
            >
              &#8599;
            </a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__item-title">Одностраничное приложение</p>
            <a
              className="portfolio__item-icon"
              href="https://shamanka.students.nomoredomainsicu.ru"
              target='_blank'
              rel="noreferrer"
              title="Ссылка на Github Pages с проектом"
            >
              &#8599;
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}