import React, { useState } from 'react';
import './MoviesCardList.css';
import '../../vendor/container.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  const [quantityCards, setQuantityCards] = useState(6)
  let cardsArray = props.moviesCardsSearch.slice(0, quantityCards)

  function handleClickButtonMore() {
    setQuantityCards(quantityCards + 6)
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container container">
        <div className="movies-card-list__items">
          <>
            {cardsArray.map((item) => (
              <MoviesCard
                key={item._id}
                id={item._id}
                card={item}
                isSaved={props.isSaved}
              />
            ))}
          </>
        </div>
        <>
          {props.moviesCardsSearch.length < 6
          ? <></>
          : <button className="movies-card-list__button-more" onClick={handleClickButtonMore}>Еще</button>}
        </>
      
      </div>
    </section>
  );
}

export default MoviesCardList; 