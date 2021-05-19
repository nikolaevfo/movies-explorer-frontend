import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

import cardsSearch from '../../utils/cardsSearch';
import cardsSaved from '../../utils/cardsSaved';

function App() {
  const [moviesCardsSearch, setMoviesCardsSearch] = useState([]);
  const [moviesCardsSaved, setMoviesCardsSaved] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "Федор",
    email: "nikolaevfo@gmail.com",
    password: "111111"
  });

  const history = useHistory();

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

  function handleLoginUser(userData) {
    setIsLoading(true);
    setTimeout(() => {
      if (userData.email === currentUser.email && userData.password === currentUser.password) {
        setIsLoading(false);
        history.push('/movies');
      } else {
        setIsLoading(false);
        setErrorPopupText('Введены некорректные данные');
        openErrorPopup();
      }
    }, 1500);
  }

  // ErrorPopup
  const [isErrorPopupOpen, setIsErrorPopupOpen] = React.useState(false);
  const [errorPopupText, setErrorPopupText] = React.useState('');

  function openErrorPopup() {
    setIsErrorPopupOpen(true)
  }
  
  function closeErrorPopup() {
    setIsErrorPopupOpen(false)
  }

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
                  moviesCardsSaved={moviesCardsSaved}
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
                  onClickSignout={handleClickSignout}
                />
              }
            </Route>

            <Route exact path="/signup">
              <Register
                onUpdateUser={handleUpdateUser}
              />
            </Route>

            <Route path="/signin">
              {isLoading
                ? <Preloader />
                : <Login
                  onLoginUser={handleLoginUser}
                />
              }
            </Route>

            <Route path="*">
              <PageNotFound />
            </Route>

          </Switch>
        </div>
        <ErrorPopup
          isOpen={isErrorPopupOpen}
          onClose={closeErrorPopup}
          errorText={errorPopupText}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App; 