import React from 'react';
import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <div className="saved-movies">
      <MoviesCardList
        moviesCards={props.moviesCardsSaved}
        isSaved={true}
      />
    </div>
  );
};

export default SavedMovies;
