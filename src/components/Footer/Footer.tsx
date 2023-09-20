import React from "react";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__block">
          <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
          <div className="footer__items">
            <a
              className="footer__item"
              href="https://practicum.yandex.ru"
              target='_blank'
              rel="noreferrer"
              title="Ссылка на Яндекс.Практикум"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__item"
              href="https://github.com/ShamankaS"
              target='_blank'
              rel="noreferrer"
              title="Ссылка на профиль Github"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}