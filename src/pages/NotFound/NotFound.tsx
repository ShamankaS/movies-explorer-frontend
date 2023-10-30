import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="error-container__text">
        <h1 className="error-container__title">404</h1>
        <p className="error-container__subtitle">Страница не найдена</p>
      </div>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="error-container__link"
      >
        Назад
      </button>
    </div>
  );
};
