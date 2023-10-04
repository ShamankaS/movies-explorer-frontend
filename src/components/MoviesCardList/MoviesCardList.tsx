import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export const MoviesCardList = () => {
  const isMoviesPage = useLocation().pathname === '/movies';
  return (
    <div className="list">
      <div className="list__container">
        <div className="list__block">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
        {isMoviesPage
          ? <button className="list__button" type="button">Ещё</button>
          : <div className="list__empty" />}
      </div>
    </div>
  );
};
