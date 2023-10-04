import React from 'react';
import './Profile.css';

export const Profile = () => (
  <section className="profile">
    <div className="profile__content">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__edit-form edit-form">
        <div className="edit-form__item">
          <label className="edit-form__label">Имя</label>
          <input className="edit-form__input" type="text" id="profile-name" placeholder="Виталий" />
        </div>
        <div className="edit-form__item">
          <label className="edit-form__label">E-mail</label>
          <input className="edit-form__input" id="profile-email" type="email" placeholder="pochta@yandex.ru" />
        </div>
        <div className="edit-form__submit-container">
          <button className="edit-form__submit" type="submit">Редактировать</button>
          <p className="profile__link">Выйти из аккаунта</p>
        </div>
      </form>
    </div>
  </section>
);
