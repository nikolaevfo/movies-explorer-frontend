import React, { useState } from "react";
import "./MoviesCardList.css";
import "../../vendor/container.css";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ moviesCards, isSaved }) {
  const [quantityScrollCards, setQuantityScrollCards] = useState(null);
  const [quantityStartCards, setQuantityStartCards] = useState(null);
  const [cardsVisibleArray, setCardsVisibleArray] = useState([]);
  const [remaindCards, setRemaindCards] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1280);

  React.useEffect(() => {
    setWindowWidth(document.documentElement.clientWidth);
  }, []);

  React.useEffect(() => {
    if (windowWidth >= 1024) {
      setQuantityScrollCards(3);
      setQuantityStartCards(12);
    } else if (windowWidth < 1024 && windowWidth >= 768) {
      setQuantityScrollCards(2);
      setQuantityStartCards(8);
    } else if (windowWidth <= 768) {
      setQuantityScrollCards(2);
      setQuantityStartCards(5);
    }
  }, [windowWidth]);

  React.useEffect(() => {
    if (moviesCards) {
      setCardsVisibleArray(moviesCards.slice(0, quantityStartCards));
    }
  }, [moviesCards, quantityScrollCards, quantityStartCards]);

  React.useEffect(() => {
    setRemaindCards(moviesCards.length - cardsVisibleArray.length);
  }, [cardsVisibleArray.length, moviesCards.length]);

  function handleWindowResize() {
    setTimeout(() => {
      setWindowWidth(document.documentElement.clientWidth);
      console.log(`after 1000 ${document.documentElement.clientWidth}`);
    }, 1000);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function handleClickButtonMore() {
    setCardsVisibleArray(
      moviesCards.slice(0, cardsVisibleArray.length + quantityScrollCards)
    );
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container container">
        <div className="movies-card-list__items">
          <>
            {cardsVisibleArray.map((item) => (
              <MoviesCard
                key={item.id}
                id={item.id}
                card={item}
                // isSaved={isSaved}
              />
            ))}
          </>
        </div>
        <>
          {!moviesCards || moviesCards.length < 6 || remaindCards < 1 ? (
            <></>
          ) : (
            <button
              className="movies-card-list__button-more"
              onClick={handleClickButtonMore}
            >
              Еще
            </button>
          )}
        </>
      </div>
    </section>
  );
}

export default MoviesCardList;
