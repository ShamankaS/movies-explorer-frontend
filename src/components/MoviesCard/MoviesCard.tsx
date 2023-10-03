import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import exampleImg from '../../images/example-img.jpg';

export const MoviesCard = () => {
  const isSavedMovies = useLocation().pathname === '/saved-movies';

  return (
    <div className="element">
      <div className="element__wrapper">
        <div className="element__block">
          <p className="element__title">33 слова о дизайне</p>
          <p className="element__time">1ч 47м</p>
        </div>
        <button className="element__button" type="button">
          {isSavedMovies
            ? (
              <span className="element__delete-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 4.94287L6.35705 7.29992L7.41771 6.23926L5.06066
                  3.88221L7.29992 1.64295L6.23926 0.582291L4 2.82155L1.76086 0.582406L0.700195 1.64307L2.93934 3.88221L0.582406
                  6.23914L1.64307 7.2998L4 4.94287Z"
                    fill="black"
                  />
                </svg>
              </span>
            )
            : (
              <span className="element__button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                  <path
                    d="M0.5 1.9C0.5 1.40294 0.902944 1 1.4 1H8.6C9.09706 1 9.5 1.40294 9.5 1.9V12.4789C9.5
                  12.5552 9.41798 12.6034 9.35133 12.5662L6.21676 10.8198C5.46033 10.3984 4.53968 10.3984 3.78324
                  10.8198L0.648671 12.5662C0.582015 12.6034 0.5 12.5552 0.5 12.4789V1.9Z"
                    stroke="#E8E8E8"
                  />
                </svg>
              </span>
            )}
        </button>
      </div>
      <img src={exampleImg} alt="Обложка фильма" className="element__image" />
    </div>
  );
};
