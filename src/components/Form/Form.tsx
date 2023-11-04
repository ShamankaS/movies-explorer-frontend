import React, {
  FC, FormEvent, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import { useFormValidation } from '../../hooks/useFormValidation';
import { userData } from '../../types/userTypes';
import { PATTERN_USERNAME, PATTERN_EMAIL } from '../../utils/constants';

interface Props {
  isRegister: boolean;
  onSubmit: (data: userData | Partial<userData>) => Promise<void>;
  error: string;
}

export const Form: FC<Props> = ({ isRegister, onSubmit, error }) => {
  const {
    values, errors, handleChange, isValid, isValidInputs,
  } = useFormValidation({
    name: '',
    email: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const userData = isRegister ? {
      name: values.name,
      email: values.email,
      password: values.password,
    } : {
      email: values.email,
      password: values.password,
    };
    onSubmit(userData).then(() => {
      setIsFormValid(false);
    });
  };

  useEffect(() => {
    setIsFormValid(isValid);
    setErrorMessage('');
  }, [values]);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  return (
    <section className="form-container">
      <Link className="form-container__logo" to="/" title="На главную" />
      <h1 className="form-container__title">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form__items">
          {isRegister
            && (
              <div className="form__item">
                <label className="form__label" htmlFor="name">Имя</label>
                <input
                  className={`form__input ${!isValidInputs.name ? 'form__input_incorrect' : ''}`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  onChange={handleChange}
                  value={values.name || ''}
                  pattern={PATTERN_USERNAME}
                  required
                />
                <span className="form__input-error">{errors.name}</span>
              </div>
            )}
          <div className="form__item">
            <label className="form__label" htmlFor="email">E-mail</label>
            <input
              className={`form__input ${!isValidInputs.email ? 'form__input_incorrect' : ''}`}
              type="email"
              id="email"
              name="email"
              placeholder="pochta@yandex.ru"
              onChange={handleChange}
              value={values.email || ''}
              pattern={PATTERN_EMAIL}
              autoComplete="on"
              required
            />
            <span className="form__input-error">{errors.email}</span>
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="password">Пароль</label>
            <input
              className={`form__input ${!isValidInputs.password ? 'form__input_incorrect' : ''}`}
              type="password"
              id="password"
              name="password"
              placeholder="••••••••••••••"
              onChange={handleChange}
              value={values.password || ''}
              required
            />
            <span className="form__input-error">{errors.password}</span>
          </div>
        </div>
        <div className="form__submit-button-container">
          <span className="form__submit-error">{errorMessage}</span>
          <button className="form__submit-button" type="submit" disabled={!isFormValid}>
            {isRegister ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <p className="form__submit-text">
            {isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?'}
            {isRegister
              ? <Link to="/signin" className="form__submit-span" title="Войти">Войти</Link>
              : <Link to="/signup" className="form__submit-span" title="Регистрация">Регистрация</Link>}
          </p>
        </div>
      </form>
    </section>
  );
};
