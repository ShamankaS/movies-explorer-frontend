import React from 'react';
import './Promo.css';

export const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__text-block'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-&#8288;разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a
            className='promo__link'
            href="#about-project"
            title='Узнать больше о проекте'
          >
            Узнать больше
          </a>
        </div>
        <div className='promo__landing-logo'></div>
      </div>
    </section>
  )
}