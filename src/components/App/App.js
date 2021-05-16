import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

import cardsSearch from '../../utils/cardsSearch';
import cardsSaved from '../../utils/cardsSaved';

function App() {
  const [moviesCardsSearch, setMoviesCardsSearch] = useState(cardsSearch);
  const [moviesCardsSaved, setMoviesCardsSaved] = useState(cardsSaved);

  return (
    <div className="root">
      <div className="page">
        {/* <Header />
        <Movies
          moviesCardsSearch={moviesCardsSearch}
        />
        <SavedMovies
          moviesCardsSearch={moviesCardsSaved}
        />
        <Footer /> */}
        {/* <Main />
        <Footer /> */}
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/movies">
            <Header />
            <Movies
              moviesCardsSearch={moviesCardsSearch}
            />
            <Footer />
          </Route>

          <Route exact path="/saved-movies">
            <Header />
            <SavedMovies
              moviesCardsSearch={moviesCardsSaved}
            />
            <Footer />
          </Route>

          {/* <Route path="/">
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Route> */}
          {/* <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route> */}

          <Route path="*">
            <PageNotFound />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App; 