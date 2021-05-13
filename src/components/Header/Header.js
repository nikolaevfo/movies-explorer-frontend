import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import '../../vendor/container.css';

import Logo from '../Logo/Logo';

function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__content">
          <Logo />
          <ul className="header__items">
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
      </div>
    </div>
  );
}

export default Header; 