import React from "react";
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import { MoviesCard } from "../MoviesCard/MoviesCard";

export const MoviesCardList = () => {
  const isMoviesPage = useLocation().pathname === '/movies';
  return (
    <section className="list">
      <div className="list__container">
        <ul className="list__block">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
        {isMoviesPage
          ? <button className="list__button">Ещё</button>
          : <div className="list__empty"></div>}
      </div>
    </section>
  )
}