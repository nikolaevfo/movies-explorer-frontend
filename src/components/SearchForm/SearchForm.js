import React from 'react';
import './SearchForm.css';
import '../../vendor/container.css';

function SearchForm() {
 
  return (
    <div className="search-form">
      <div className="search-form__container container">
        <form action="" className="search-form__form" name="searchForm">
          <input type="text" className="search-form__input-text" placeholder="Фильм" />
          <div className="searh-form__button-wrapper">
            <button className="search-form__button-submit"></button>
          </div>
          <label className="search-form__checkbox-label">Короткометражки
            <input type="checkbox" className="search-form__checkbox-input" />
            <span className="search-form__checkbox-slider"></span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default SearchForm; 