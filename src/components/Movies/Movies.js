import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList
        moviesCardsSearch={props.moviesCardsSearch}
      />
    </div>
  );
};

export default Movies;
