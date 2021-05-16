import React from 'react';
import './MoviesCard.css';
import '../../vendor/container.css';

function MoviesCard(props) {
  const hour = Math.floor(props.card.duration / 60);
  const min = props.card.duration % 60;

  return (
    <article className="movies-card" id={props.id}>
      <img src={props.card.image[props.card.imgName]} alt="" className="movies-card__img" />
      <div className="movies-card__title-row">
        <h2 className="movies-card__title">{props.card.nameRU}</h2>
        <button className={props.isSaved ? 'movies-card__like-button movies-card__like-button_saved' : 'movies-card__like-button' }></button>
      </div>
      <p className="movies-card__length">{hour}ч {min}м</p>
    </article>
  );
}

export default MoviesCard; 