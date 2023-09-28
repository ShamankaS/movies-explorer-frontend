import React from "react";
import './SearchForm.css';

export const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__container">
        <div className="search__input-block">
          <span className="search__icon"></span>
          <input className="search__input" placeholder="Фильм" required />
          <button className="search__button" type="submit"></button>
        </div>
        <div className="search__toggle">
          <label className="toggle">
            <input type="checkbox" id="toggle-checkbox" />
            <label className="toggle-switch" htmlFor="toggle-checkbox"></label>
          </label>
          <span className="search__toggle-title">Короткометражки</span>
        </div>
      </div>
    </section>
  )
}