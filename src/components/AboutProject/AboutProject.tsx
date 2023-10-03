import React from 'react';
import './AboutProject.css';

export const AboutProject = () => (
  <section className="about" id="about-project">
    <div className="about__container">
      <h2 className="about__title">О проекте</h2>
      <section className="about__items">
        <article className="about__item">
          <h3 className="about__item-title">Дипломный проект включал 5 этапов</h3>
          <p className="about__item-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="about__item">
          <h3 className="about__item-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__item-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </section>
      <div className="about__steps">
        <div className="about__step about__step_colored">
          <p className="about__step-text about__step-text_colored">1 неделя</p>
          <h4 className="about__step-title">Back-end</h4>
        </div>
        <div className="about__step">
          <p className="about__step-text">4 неделя</p>
          <h4 className="about__step-title">Front-end</h4>
        </div>
      </div>
    </div>
  </section>
);
