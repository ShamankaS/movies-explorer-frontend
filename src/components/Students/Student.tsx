import React from 'react';
import './Student.css';
import studentAvatar from '../../images/avatar.jpg';

export const Student = () => (
  <section className="student">
    <div className="student__container">
      <h2 className="student__title">Студент</h2>
      <section className="student__about">
        <div className="student__text-block">
          <h3 className="student__text-block-title">Татьяна</h3>
          <h3 className="student__text-block-subtitle">Фронтенд-разработчик, 27 лет</h3>
          <p className="student__text-block-text">
            Родилась и живу в Москве, закончила факультет Биомедицинской техники МГТУ&nbsp;им&nbsp;Н.Э.Баумана. Мама двух французских бульдогов.
            Я люблю слушать музыку, увлекаюсь компьютерными играми. С октября 2022 активно изучаю веб-программирование.
            Работала в НИИ и иностранной компании-производителе медицинской техники, в настоящий момент работаю старшим преподавателем в &#34;Альма-матер&#34;.
          </p>
          <a
            className="student__link"
            href="https://github.com/ShamankaS"
            target="_blank"
            rel="noreferrer"
            title="Ссылка на профиль Github"
          >
            Github
          </a>
        </div>
        <img className="student__avatar" src={studentAvatar} alt="Аватар студента" />
      </section>
    </div>
  </section>
);
