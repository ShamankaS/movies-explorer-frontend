import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="error-container">
    <div className="error-container__text">
      <h1 className="error-container__title">404</h1>
      <p className="error-container__subtitle">Страница не найдена</p>
    </div>
    <Link to="/" className="error-container__link">Назад</Link>
  </div>
);
