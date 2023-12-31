import React, { FC, MouseEvent } from 'react';
import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const Navigation: FC<Props> = ({ visible, onClose }) => {
  const isLanding = useLocation().pathname === '/';

  const handleOverlayClick = (evt: MouseEvent) => {
    if ((evt.target as HTMLElement).classList.contains('navigation_visible')) {
      onClose();
    }
  };

  return (
    <div className={`navigation ${visible ? 'navigation_visible' : ''}`} onClick={handleOverlayClick}>
      <nav className={`navigation__wrapper ${visible ? 'navigation__wrapper_visible' : ''}`}>
        <ul className="navigation__items">
          <li className="navigation__item navigation__item_to-main">
            <NavLink
              className={({ isActive }) => `navigation__item-link ${isLanding ? 'navigation__item-link_landing' : ''} ${isActive ? 'navigation__item-link_active' : ''}`}
              onClick={onClose}
              to="/"
              title="На главную"
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation__item navigation__item_active">
            <NavLink
              className={({ isActive }) => `navigation__item-link ${isLanding ? 'navigation__item-link_landing' : ''} ${isActive ? 'navigation__item-link_active' : ''}`}
              onClick={onClose}
              to="/movies"
              title="Все фильмы"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              className={({ isActive }) => `navigation__item-link ${isLanding ? 'navigation__item-link_landing' : ''} ${isActive ? 'navigation__item-link_active' : ''}`}
              onClick={onClose}
              to="/saved-movies"
              title="Сохранённые фильмы"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/profile"
          onClick={onClose}
          className={`navigation__items navigation__items_auth ${isLanding ? 'navigation__item-link_landing' : ''}`}
          title="Аккаунт"
        >
          Аккаунт
          <div className={`navigation__button ${isLanding ? 'navigation__button_landing' : ''}`}>
            <span className="navigation__button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 4C8.5 5.38071 7.38071 6.5 6 6.5C4.61929
                  6.5 3.5 5.38071 3.5 4C3.5 2.61929 4.61929 1.5 6 1.5C7.38071 1.5 8.5 2.61929 8.5 4ZM10 4C10 6.20914 8.20914
                  8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM4 9.25C1.92893 9.25 0.25 10.9289
                  0.25 13V14H1.75V13C1.75 11.7574 2.75736 10.75 4 10.75H8C9.24264 10.75 10.25 11.7574 10.25 13V14H11.75V13C11.75 10.9289
                  10.0711 9.25 8 9.25H4Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};
