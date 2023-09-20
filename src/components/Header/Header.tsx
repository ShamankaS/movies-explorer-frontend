import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Header.css';

export const Header = () => {
  // const isLanding = useLocation().pathname === '/';
  const isLanding = true;

  return (
    <header className={`header ${isLanding ? 'header__landing' : ''}`}>
      <div className='header__container'>
        <Link
          className='header__logo'
          to='/'
          title='На главную'
        />
        {isLanding
          ? (
            <nav className='header__auth'>
              <ul className='header__auth-items'>
                <li>
                  <NavLink
                    to='/signup'
                    className='header__auth-item'
                    title='Регистрация'
                  >
                    Регистрация
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/signin'
                    className='header__auth-item header__auth-item_btn'
                    title='Войти'
                  >
                    Войти
                  </NavLink>
                </li>
              </ul>
            </nav>
          )
          :
          <button className='header__burger'></button>
        }
      </div>
    </header>
  )
}