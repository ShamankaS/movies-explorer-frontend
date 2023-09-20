import React from "react";
import './Techs.css';

export const Techs = () => {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <section className="techs__content">
          <h3 className="techs__content-title">7 технологий</h3>
          <p className="techs__content-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </section>
        <ul className="techs__items">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">TypeScript</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}