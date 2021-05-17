import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import '../../vendor/container.css';

import Logo from '../Logo/Logo';

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <section className="header">
      <div className={isBurgerOpen ? "header__content-background header__content-background_opened" : "header__content-background"}></div>
      <div className="header__container container">
        <div className="header__logo-wrapper">
          <Link exact to="/" className="header__logo-link"><Logo /></Link>
        </div>
        <div className={isBurgerOpen ? "header__content header__content_opened" : "header__content"}>
          <div className="header__logo-menu-wrapper">
            <Link exact to="/" className="header__logo-link"><Logo /></Link>
          </div>
          <nav className="header__nav">
            <ul className="header__items">
              <li className="header__item">
                <NavLink exact to="/" className="header__link" activeClassName="header__link_active">Главная</NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/movies" className="header__link" activeClassName="header__link_active">Фильмы</NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/saved-movies" className="header__link" activeClassName="header__link_active">Сохранённые фильмы</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__accaunt-conteiner">
            <Link to="/profile" className="header__accaunt-text">Аккаунт</Link>
            <div className="header__accaunt-img"></div>
          </div>
        </div>
        <div className="header__btn" onClick={handleBurgerClick}>
          <span className={isBurgerOpen ? 'header__burger header__burger_active' : 'header__burger' } />
        </div>
      </div>
    </section>
  );
}

export default Header; 