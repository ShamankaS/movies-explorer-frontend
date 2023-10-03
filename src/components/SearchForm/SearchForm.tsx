import React from 'react';
import './SearchForm.css';

export const SearchForm = () => (
  <section className="search">
    <div className="search__container">
      <form className="search__input-block">
        <span className="search__icon" />
        <input className="search__input" placeholder="Фильм" required />
        <button className="search__button" aria-label="Поиск" type="submit" />
      </form>
      <div className="search__toggle">
        <label className="toggle" htmlFor="toggle-checkbox">
          <input type="checkbox" id="toggle-checkbox" />
          <div className="toggle-switch" />
        </label>
        <span className="search__toggle-title">Короткометражки</span>
      </div>
    </div>
  </section>
);
