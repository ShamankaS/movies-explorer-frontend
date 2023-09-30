import React from "react";
import './MoviesCardList.css';
import { MoviesCard } from "../MoviesCard/MoviesCard";

export const MoviesCardList = () => {
  return (
    <main className="list">
      <div className="list__container">
        <ul className="list__block">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
        <button className="list__button">Ещё</button>
      </div>
    </main >
  )
}