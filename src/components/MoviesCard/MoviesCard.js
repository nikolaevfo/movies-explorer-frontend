import React from "react";
import "./MoviesCard.css";
import "../../vendor/container.css";

function MoviesCard({ id, card, moviesCardsSaved, onLikeClick }) {
  const hour = Math.floor(card.duration / 60);
  const min = card.duration % 60;

  let isCardsLiked = false;
  if (moviesCardsSaved) {
    moviesCardsSaved.forEach((element) => {
      if (element.movieId.toString() === card.movieId.toString()) {
        isCardsLiked = true;
      }
    });
  } else {
    isCardsLiked = true;
  }

  function handleLikeClick() {
    onLikeClick(card);
  }
  return (
    <article className="movies-card" id={id}>
      <img src={card.image} alt="Обложка" className="movies-card__img" />
      <div className="movies-card__title-row">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <button
          className={
            isCardsLiked
              ? "movies-card__like-button movies-card__like-button_saved"
              : "movies-card__like-button"
          }
          onClick={handleLikeClick}
        ></button>
      </div>
      <p className="movies-card__length">
        {hour}ч {min}м
      </p>
    </article>
  );
}

export default MoviesCard;
