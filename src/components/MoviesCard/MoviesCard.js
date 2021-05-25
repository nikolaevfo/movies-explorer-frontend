import React from "react";
import "./MoviesCard.css";
import "../../vendor/container.css";

function MoviesCard({ id, card, isSaved }) {
  const hour = Math.floor(card.duration / 60);
  const min = card.duration % 60;

  // function handleLikeClick();

  return (
    <article className="movies-card" id={id}>
      <img
        // src={`https://api.nomoreparties.co/${card.image.url}]`}
        src="/"
        // alt="p"
        alt={card.image.name}
        className="movies-card__img"
      />
      <div className="movies-card__title-row">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <button
          className={
            isSaved
              ? "movies-card__like-button movies-card__like-button_saved"
              : "movies-card__like-button"
          }
          // onclick={handleLikeClick}
        ></button>
      </div>
      <p className="movies-card__length">
        {hour}ч {min}м
      </p>
    </article>
  );
}

export default MoviesCard;
