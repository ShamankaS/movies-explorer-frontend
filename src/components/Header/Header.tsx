import React, { memo, useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Header.css';
import '../Navigation/Navigation.css';
import { Navigation } from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export const Header = memo(() => {
  const isLanding = useLocation().pathname === '/';
  const currentUser = useContext(CurrentUserContext);
  const [isOpened, setOpened] = useState(false);

  const togglePopup = () => {
    setOpened((state) => !state);
    if (isOpened) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeMenu = () => {
    setOpened(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`header ${isLanding ? 'header_landing' : ''}`}>
      <div className="header__container">
        <Link className="header__logo" to="/" title="На главную" />
        {!currentUser
          ? (
            <nav className="header__nav">
              <ul className="header__items">
                <li>
                  <NavLink className="header__item" to="/signup" title="Регистрация">Регистрация</NavLink>
                </li>
                <li className="header__item-button">
                  <NavLink className="header__item header__item-button-text" to="/signin" title="Войти">Войти</NavLink>
                </li>
              </ul>
            </nav>
          )
          : <Navigation visible={isOpened} onClose={closeMenu} />}
        {currentUser
          && (
            <div className="burger">
              <label className="burger__icon" htmlFor="burger-checkbox">
                <input type="checkbox" id="burger-checkbox" onClick={togglePopup} />
                <span className="icon-line line1" />
                <span className="icon-line line2" />
                <span className="icon-line line3" />
              </label>
            </div>
          )}
      </div>
    </header>
  );
});
