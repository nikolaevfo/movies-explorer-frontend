import React from 'react';
import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <div className="saved-movies">
      <MoviesCardList
        moviesCardsSearch={props.moviesCardsSearch}
        isSaved={true}
      />
    </div>
  );
};

export default SavedMovies;
