import React from 'react';
import './Footer.css';
import '../../vendor/container.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container container">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__content">
          <p className="footer__copyright">&copy; 2021</p>
          <ul className="footer__items">
            <li className="footer__item">
              <Link to={{pathname: 'https://praktikum.yandex.ru/'}} target="_blank" className="footer__link">Яндекс.Практикум</Link>
            </li>
            <li className="footer__item">
              <Link to={{pathname: 'https://github.com/nikolaevfo'}} target="_blank" className="footer__link">Github</Link>
            </li>
            <li className="footer__item">
              <Link to={{pathname: 'https://vk.com/id9465254'}} target="_blank" className="footer__link">Вконтакте</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
