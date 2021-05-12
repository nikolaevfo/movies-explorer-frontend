import React from 'react';
import './Footer.css';
import '../../vendor/container.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div class="footer">
      <div class="footer__container container">
        <h3 class="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div class="footer__content">
          <p class="footer__copyright">&copy; 2021</p>
          <ul class="footer__items">
            <li class="footer__item">
              <Link to={{pathname: 'https://praktikum.yandex.ru/'}} target="_blank" className="footer__link">Яндекс.Практикум</Link>
            </li>
            <li class="footer__item">
              <Link to={{pathname: 'https://github.com/nikolaevfo'}} target="_blank" className="footer__link">Github</Link>
            </li>
            <li class="footer__item">
              <Link to={{pathname: 'https://vk.com/id9465254'}} target="_blank" className="footer__link">Вконтакте</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
