import React from "react";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({
  moviesCardsSearchList,
  onSubmitSearchForm,
  isCardsError,
  isLoading,
}) {
  return (
    <div className="movies">
      <SearchForm onSubmit={onSubmitSearchForm} />

      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {isCardsError ? (
            <>
              <p style={{ color: "black", fontSize: 35, textAlign: "center" }}>
                {isCardsError}
              </p>
            </>
          ) : (
            <>
              <MoviesCardList
                moviesCards={moviesCardsSearchList}
                isSaved={false}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Movies;
