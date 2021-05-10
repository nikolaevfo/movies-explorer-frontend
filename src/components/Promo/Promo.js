import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';

import Logo from '../Logo/Logo';

import mainPromoWeb from '../../images/main-promo-web.svg';


function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <div className="promo__header">
          <Logo />
          <nav className="promo__header-nav">
            <ul class="promo__header-nav-buttons">
              <li class="promo__header-nav-item">
                <button className="header__button">Регистрация</button>
                {/* <Link to={props.headerLinkUrl} className="header__info-link button" onClick={props.onClick}>{props.btnText}</Link> */}
              </li>
              <li class="promo__header-nav-item">
                <button className="header__button header__button_color_blue">Войти</button>
                {/* <Link to={props.headerLinkUrl} className="header__info-link button" onClick={props.onClick}>{props.btnText}</Link> */}
              </li>
            </ul>
          </nav>
        </div>
        <div className="promo__content">
          <div className="promo__text-column">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__info-text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <button className="promo__content-button">Узнать больше</button>
          </div>
          <img src={mainPromoWeb} alt="Web" className="promo__content-img" />
        </div>
      </div>
    </div>
  );
};

export default Promo;
