import React, { useState } from 'react';
import { NavLink  } from 'react-router-dom';
import './PageNotFound.css';
import '../../vendor/container.css';

function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__wrapper">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__subtitle">Страница не найдена</p>
      </div>
      <button className="page-not-found__button-back">Назад</button>
    </section>
  );
}

export default PageNotFound; 