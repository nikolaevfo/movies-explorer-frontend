import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Preloader from '../Preloader/Preloader';

import cardsSearch from '../../utils/cardsSearch';
import cardsSaved from '../../utils/cardsSaved';

function App() {
  const [moviesCardsSearch, setMoviesCardsSearch] = useState([]);
  const [moviesCardsSaved, setMoviesCardsSaved] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "Федор",
    email: "nikolaevfo@gmail.com",
  });

  function getMoviesCardsSearch() {
    setIsLoading(true);
    setTimeout(() => {
      setMoviesCardsSearch(cardsSearch)
      setIsLoading(false);
     }, 1500);
  };

  function getMoviesCardsSaved() {
    setIsLoading(true);
    setTimeout(() => {
      setMoviesCardsSaved(cardsSaved)
      setIsLoading(false);
     }, 1500);
  };

  React.useEffect(() => {
    getMoviesCardsSearch();
    getMoviesCardsSaved();
  }, []);

  function handleUpdateUser(userData) {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentUser(userData);
      setIsLoading(false);
     }, 1500);
  };

  function handleClickSignout() {
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Switch>

            <Route exact path="/">
              <Main />
            </Route>

            <Route exact path="/movies">
              <Header />
              {isLoading
                ? <Preloader />
                : <Movies
                  moviesCardsSearch={moviesCardsSearch}
                />
              }
              <Footer />
            </Route>

            <Route exact path="/saved-movies">
              <Header />
              {isLoading
                ? <Preloader />
                : <SavedMovies
                  moviesCardsSearch={moviesCardsSaved}
                />
              }
              <Footer />
            </Route>

            <Route exact path="/profile">
              <Header />
              {isLoading
                ? <Preloader />
                : <Profile
                  onUpdateUser={handleUpdateUser}
                  handleClickSignout={handleClickSignout}
                />
              }
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
    </CurrentUserContext.Provider>
  );
}

export default App; 