import React from 'react';
import './Portfolio.css';
import '../../vendor/container.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container container">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__items">
          <li className="portfolio__item">
            <Link to={{pathname: 'https://nikolaevfo.github.io/russian-travel/index.html'}} target="_blank" className="portfolio__item-link">Адаптивный сайт</Link>
          </li>
          <li className="portfolio__item">
            <Link to={{pathname: 'https://nikolaevfo.github.io/Alta-Profil/index.html'}} target="_blank" className="portfolio__item-link">Адаптивный сайт на React</Link>
          </li>
          <li className="portfolio__item">
            <Link to={{pathname: 'https://github.com/nikolaevfo/react-mesto-api-full'}} target="_blank" className="portfolio__item-link">Одностраничное приложение</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
