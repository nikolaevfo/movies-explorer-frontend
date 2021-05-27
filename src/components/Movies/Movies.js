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
  moviesCardsSaved,
  onLikeClick,
  // onMovieAdd,
  // onMovieDel,
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
                onLikeClick={onLikeClick}
                moviesCardsSaved={moviesCardsSaved}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Movies;
