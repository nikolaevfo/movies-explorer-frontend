import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Preloader from "../Preloader/Preloader";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

// import cardsSearch from "../../utils/cardsSearch";
// import cardsSaved from "../../utils/cardsSaved";

function App() {
  const [moviesSourceList, setMoviesSourceList] = useState([]);
  const [moviesCardsSearchList, setMoviesCardsSearchList] = useState([]);
  const [moviesCardsSaved, setMoviesCardsSaved] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "Федор",
    email: "nikolaevfo@gmail.com",
    password: "111111",
  });

  const history = useHistory();

  const [isCardsError, setIsCardsError] = useState("");

  // получение сохранненых фильмов
  React.useEffect(() => {
    const savedData = JSON.parse(localStorage.sourceFilmsList);
    if (savedData) {
      setMoviesCardsSearchList(savedData);
    }
  }, []);

  // обработчик нажатия на поиск
  function handleSubmitSearchForm() {
    setIsLoading(true);
    moviesApi
      .getFilmsList()
      .then((initialCards) => {
        if (initialCards.length > 1) {
          localStorage.clear();
          setMoviesSourceList(initialCards);
          localStorage.setItem("sourceFilmsList", JSON.stringify(initialCards));
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsCardsError("Ничего не найдено");
        }
      })
      .catch(() =>
        setIsCardsError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        )
      );
  }

  // обновляем список найденных карточек при новом поиске
  React.useEffect(() => {
    setMoviesCardsSearchList(moviesSourceList.slice());
  }, [moviesSourceList]);

  // провереям, заполнено ли локальное хранилище
  React.useEffect(() => {
    const savedData = JSON.parse(localStorage.sourceFilmsList);
    if (savedData) {
      setMoviesCardsSearchList(savedData);
    }
  }, []);

  // регистрация
  function handleRegister(userData) {
    setIsLoading(true);
    return mainApi
      .register(userData)
      .then((res) => {
        if (res.user) {
          setIsLoading(false);
          history.push("/signin");
        } else {
          setIsLoading(false);
          setErrorPopupText("Ошибка при регистрации");
          openErrorPopup();
        }
      })
      .catch(() => {
        setIsLoading(false);
        setErrorPopupText("Ошибка при регистрации");
        openErrorPopup();
      });
  }

  // вход пользователя
  function handleLoggedIn(userData) {
    setIsLoading(true);
    return mainApi
      .login(userData)
      .then((res) => {
        console.log(res);
        if (res.user) {
          setIsLoading(false);
          history.push("/movies");
        } else {
          setIsLoading(false);
          setErrorPopupText("Ошибка при регистрации");
          openErrorPopup();
        }
      })
      .catch(() => {
        setIsLoading(false);
        setErrorPopupText("Ошибка при регистрации");
        openErrorPopup();
      });
  }

  // ErrorPopup
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);
  const [errorPopupText, setErrorPopupText] = useState("");

  function openErrorPopup() {
    setIsErrorPopupOpen(true);
  }

  function closeErrorPopup() {
    setIsErrorPopupOpen(false);
  }

  function handleClickSignout() {
    localStorage.clear();
  }

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
              <Movies
                moviesCardsSearchList={moviesCardsSearchList}
                onSubmitSearchForm={handleSubmitSearchForm}
                isCardsError={isCardsError}
                isLoading={isLoading}
              />
              <Footer />
            </Route>

            <Route exact path="/saved-movies">
              <Header />
              {isLoading ? (
                <Preloader />
              ) : (
                <SavedMovies moviesCardsSaved={moviesCardsSaved} />
              )}
              <Footer />
            </Route>

            <Route exact path="/profile">
              <Header />
              {isLoading ? (
                <Preloader />
              ) : (
                <Profile
                  // onUpdateUser={handleUpdateUser}
                  onClickSignout={handleClickSignout}
                />
              )}
            </Route>

            <Route exact path="/signup">
              <Register onRegister={handleRegister} />
            </Route>

            <Route exact path="/signin">
              {isLoading ? (
                <Preloader />
              ) : (
                <Login onLoggedIn={handleLoggedIn} />
              )}
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
