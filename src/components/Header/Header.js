import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import '../../vendor/container.css';

import Logo from '../Logo/Logo';

function Header(props) {
 
  return (
    <div className="header">
      <div className={props.isBurgerOpen ? "header__content-background header__content-background_opened" : "header__content-background"}></div>
      <div className="header__container container">
        <div className="header__logo-wrapper">
          <Logo />
        </div>
        <div className={props.isBurgerOpen ? "header__content header__content_opened" : "header__content"}>
          
          <div className="header__logo-menu-wrapper">
            <Logo />
          </div>
          <ul className="header__items">
            <li className="header__item">
              <p className="header__link">Главная</p>
            </li>
            <li className="header__item">
              <p className="header__link">Фильмы</p>
            </li>
            <li className="header__item">
              <p className="header__link">Сохранённые фильмы </p>
            </li>
          </ul>
          <div className="header__accaunt-conteiner">
            <p className="header__accaunt-text">Аккаунт</p>
            <div className="header__accaunt-img"></div>
          </div>
        </div>
        <div className="header__btn" onClick={props.onBurgerClick}>
          <span className={props.isBurgerOpen ? 'header__burger header__burger_active' : 'header__burger' } />
        </div>
      </div>
    </div>
  );
}

export default Header; 