import React from "react";
import "./SavedMovies.css";
import Preloader from "../Preloader/Preloader";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ moviesCardsSaved, isCardsError, isLoading }) {
  return (
    <div className="saved-movies">
      <SearchForm />
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
              <MoviesCardList moviesCards={moviesCardsSaved} isSaved={true} />
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SavedMovies;
