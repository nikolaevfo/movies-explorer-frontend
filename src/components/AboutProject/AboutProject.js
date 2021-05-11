import React from 'react';
import './AboutProject.css';
import '../../vendor/container.css';


function AboutProject() {
  return (
    <div className="about-project" id="about-project">
      <div className="about-project__container container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info-text-items">
          <div className="about-project__info-text-item">
            <h3 className="about-project__info-text-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-text-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__info-text-item">
            <h3 className="about-project__info-text-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-text-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__chart">
          <p className="about-project__chart-item">1 неделя</p>
          <p className="about-project__chart-item">4 недели</p>
        </div>
        <div className="about-project__chart-title">
          <p className="about-project__chart-title-item">Back-end</p>
          <p className="about-project__chart-title-item">Front-end</p>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
