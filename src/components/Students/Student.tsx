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
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-&#8288;разработке, начал заниматься фриланс-&#8288;заказами и ушёл с постоянной работы.
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
