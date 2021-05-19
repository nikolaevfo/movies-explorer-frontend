import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList
        moviesCards={props.moviesCardsSaved}
        isSaved={true}
      />
    </div>
  );
};

export default SavedMovies;
