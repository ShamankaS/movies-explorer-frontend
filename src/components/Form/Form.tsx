import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

interface Props {
  isRegister: boolean;
}

const Form: React.FC<Props> = ({ isRegister }) => (
  <section className="form-container">
    <Link className="form-container__logo" to="/" title="На главную" />
    <h1 className="form-container__title">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
    <form className="form">
      <div className="form__items">
        {isRegister
          && (
            <div className="form__item">
              <label className="form__label" htmlFor="name">Имя</label>
              <input className="form__input" type="text" id="name" placeholder="Виталий" />
            </div>
          )}
        <div className="form__item">
          <label className="form__label" htmlFor="email">E-mail</label>
          <input className="form__input" type="email" id="email" placeholder="pochta@yandex.ru" />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="password">Пароль</label>
          <input className="form__input form__input_incorrect" type="password" id="password" placeholder="••••••••••••••" />
          <span className="form__span">Что-то пошло не так...</span>
        </div>
      </div>
      <div className="form__submit-button-container">
        <button className="form__submit-button" type="submit">
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </button>
        <p className="form__submit-text">
          {isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?'}
          <span>
            {isRegister
              ? <Link to="/signin" className="form__submit-span" title="Войти">Войти</Link>
              : <Link to="/signup" className="form__submit-span" title="Регистрация">Регистрация</Link>}
          </span>
        </p>
      </div>
    </form>
  </section>
);

export default Form;
