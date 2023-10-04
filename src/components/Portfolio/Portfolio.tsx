import React from 'react';
import './Portfolio.css';

export const Portfolio = () => (
  <section className="portfolio">
    <div className="portfolio__container">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a
            href="https://shamankas.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
            title="Ссылка на Github Pages с проектом"
            className="portfolio__item-link"
          >
            <p className="portfolio__item-title">Статичный сайт</p>
            <span className="portfolio__item-icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://shamankas.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
            title="Ссылка на Github Pages с проектом"
            className="portfolio__item-link"
          >
            <p className="portfolio__item-title">Адаптивный сайт</p>
            <span className="portfolio__item-icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://shamanka.students.nomoredomainsicu.ru"
            target="_blank"
            rel="noreferrer"
            title="Ссылка на Github Pages с проектом"
            className="portfolio__item-link"
          >
            <p className="portfolio__item-title">Одностраничное приложение</p>
            <span className="portfolio__item-icon">&#8599;</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
);
