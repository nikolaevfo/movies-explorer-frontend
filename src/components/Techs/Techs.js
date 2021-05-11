import React from 'react';
import './Techs.css';
import '../../vendor/container.css';

function Techs() {
  return (
    <div className="techs">
      <div className="techs__container container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__info">
          <h3 className="techs__info-title">7 технологий</h3>
          <p className="techs__info-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__info-items">
            <li className="techs__info-item">
              <p className="techs__info-item-text">HTML</p>
            </li>
            <li className="techs__info-item">
              <p className="techs__info-item-text">CSS</p>
            </li>
            <li className="techs__info-item">
              <p className="techs__info-item-text">JS</p>
            </li>
            <li className="techs__info-item">
              <p className="techs__info-item-text">React</p>
            </li>
            <li className="techs__info-item">
              <p className="techs__info-item-text">Git</p>
            </li>
            <li className="techs__info-item">
              <p className="techs__info-item-text">Express.js</p>
            </li>
            <li className="techs__info-item">
              <p className="techs__info-item-text">mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Techs;
