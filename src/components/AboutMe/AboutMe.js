import React from 'react';
import './AboutMe.css';
import '../../vendor/container.css';
import { Link } from 'react-router-dom';

import myPhoto from '../../images/my-photo.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__container container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__info-column">
            <h3 className="about-me__info-title">Федор</h3>
            <h4 className="about-me__info-subtitle">Фронтенд-разработчик, 34 года</h4>
            <p className="about-me__info-text">Я живу в Ижевске. Закончил приборостроительный факультет ИжГТУ. С 2008 года работаю на Ижевском радиозаводе. Последние несколько лет увлекался версткой, что в итоге привело меня в Яндекс.Практикум. </p>
            <ul className="about-me__info-links">
              <li className="about-me__info-item">
                <Link to={{pathname: 'https://vk.com/id9465254'}} target="_blank" className="about-me__info-link">Вконтакте</Link>
              </li>
              <li className="about-me__info-item">
                <Link to={{pathname: 'https://github.com/nikolaevfo'}} target="_blank" className="about-me__info-link">Github</Link>
                </li>
            </ul>
          </div>
          <div className="about-me__info-photo-container">
            <img src={myPhoto} alt="myPhoto" className="about-me__info-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
