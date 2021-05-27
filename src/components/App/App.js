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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import filterFlims from "../../hooks/filterFilms";
import refactorMovieCardToMongo from "../../hooks/refactorMovieCardToMongo";

function App() {
  const [moviesCardsSearchList, setMoviesCardsSearchList] = useState([]);
  const [moviesCardsSaved, setMoviesCardsSaved] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState([]);

  const history = useHistory();

  const [isCardsError, setIsCardsError] = useState("");

  const [loggedIn, setLoggedIn] = useState(true);

  // обработчик нажатия на поиск по общему списку
  function handleSubmitSearchFormMovies(searchData) {
    setIsLoading(true);
    moviesApi
      .getFilmsList()
      .then((initialCards) => {
        if (initialCards.length > 1) {
          localStorage.clear();
          let searchList = filterFlims(initialCards, searchData);

          let searchListConvertedToMongo = [];
          searchList.forEach((item) => {
            searchListConvertedToMongo.push(refactorMovieCardToMongo(item));
          });
          setMoviesCardsSearchList(searchListConvertedToMongo);

          localStorage.setItem(
            "searchList",
            JSON.stringify(searchListConvertedToMongo)
          );
          setIsLoading(false);
          if (searchListConvertedToMongo.length === 0) {
            setIsCardsError("Ничего не найдено");
          }
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

  // загрузка сохраненных карточек
  React.useEffect(() => {
    if (loggedIn) {
      setIsCardsError(``);
      mainApi
        .getSavedMovies()
        .then((initialCards) => {
          setMoviesCardsSaved(initialCards);
        })
        .catch((err) =>
          setIsCardsError(`Во время запроса произошла ошибка ${err}`)
        );
    }
  }, [loggedIn]);

  // обработчик нажатия на поиск по списку сохраненных
  function handleSubmitSearchFormSavedMovies() {}

  // провереям, заполнено ли локальное хранилище при обновлении страницы
  React.useEffect(() => {
    if (localStorage.getItem("searchList")) {
      setMoviesCardsSearchList(JSON.parse(localStorage.searchList));
    }
  }, [loggedIn]);

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

  // login вход пользователя
  function handleLoggedIn(userData) {
    setIsLoading(true);
    return mainApi
      .login(userData)
      .then((res) => {
        if (res.user) {
          setIsLoading(false);
          setCurrentUser(res.user);
          setLoggedIn(true);
          history.push("/movies");
        } else {
          setIsLoading(false);
          setErrorPopupText("Ошибка при входе");
          openErrorPopup();
        }
      })
      .catch(() => {
        setIsLoading(false);
        setErrorPopupText("Ошибка при входе");
        openErrorPopup();
      });
  }

  // проверка авторизации при запуске
  React.useEffect(() => {
    mainApi
      .checkToken()
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((err) => console.log("Ошибка авторизации", err));
  }, []);

  // проверка авторизации при переходе по history
  React.useEffect(() => {
    if (loggedIn) {
      mainApi
        .checkToken()
        .then((res) => {
          if (!res || res.statusCode === 400) {
            throw new Error("Токен не передан или передан не в том формате");
          } else if (res.statusCode === 401) {
            throw new Error("Переданный токен некорректен");
          }
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
          } else {
            history.push("/");
          }
        })
        .catch(() => {
          setLoggedIn(false);
          history.push("/");
        });
    }
  }, [history, loggedIn]);

  // profile коррекция данных пользователя
  function handleUpdateUser(userData) {
    setIsLoading(true);
    return mainApi
      .updateUser(userData)
      .then((res) => {
        if (res.name) {
          setIsLoading(false);
          setCurrentUser({ name: res.name, email: res.email });
        } else {
          setIsLoading(false);
          setErrorPopupText("Ошибка при изменении данных");
          openErrorPopup();
        }
      })
      .catch(() => {
        setIsLoading(false);
        setErrorPopupText("Ошибка при изменении данных");
        openErrorPopup();
      });
  }

  // выход
  function handleClickSignout() {
    localStorage.clear();
    setMoviesCardsSearchList([]);
    setIsLoading(true);
    return mainApi
      .signout()
      .then((res) => {
        if (res.message) {
          setIsLoading(false);
          setCurrentUser([]);
          setLoggedIn(false);
          history.push("/signin");
        } else {
          setIsLoading(false);
          setErrorPopupText("Ошибка");
          openErrorPopup();
        }
      })
      .catch(() => {
        setIsLoading(false);
        setErrorPopupText("Ошибка");
        openErrorPopup();
      });
  }

  // добавление фильма в сохраненные
  function handleAddMovie(movieData) {
    setIsLoading(true);
    return mainApi
      .addMovie(movieData)
      .then((newCard) => {
        console.log(newCard);
        if (newCard) {
          console.log(moviesCardsSaved);
          console.log(newCard);
          const newSavedMoviesList = moviesCardsSaved.slice();
          newSavedMoviesList.push(newCard);
          setMoviesCardsSaved(newSavedMoviesList);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setErrorPopupText("Ошибка при добавлении фильма");
          openErrorPopup();
        }
      })
      .catch(() => {
        setIsLoading(false);
        setErrorPopupText("Ошибка при добавлении фильма");
        openErrorPopup();
      });
  }

  // удаление фильма
  function handleDelMovie(cardId) {
    setIsLoading(true);
    return mainApi
      .delMovie(cardId)
      .then(() => {
        setIsLoading(false);
        const newSavedCards = moviesCardsSaved.filter((c) => c._id !== cardId);
        setMoviesCardsSaved(newSavedCards);
      })
      .catch((err) => console.log("Ошибка при удалении карточки", err))
      .finally(() => setIsLoading(false));
  }

  // обработка клика на лайк
  function handleLikeClick(card) {
    console.log("click");
    if (moviesCardsSaved) {
      console.log("saved есть");
      let isLiked = false;
      moviesCardsSaved.forEach((element) => {
        if (element.movieId.toString() === card.movieId.toString()) {
          isLiked = true;
        }
      });
      if (isLiked) {
        handleDelMovie(card._id);
      } else {
        handleAddMovie(card);
      }
    } else {
      console.log("add card");
      handleAddMovie(card);
    }
  }

  // ErrorPopup
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);
  const [errorPopupText, setErrorPopupText] = useState("");

  function openErrorPopup() {
    setIsErrorPopupOpen(true);
  }

  function closeErrorPopup() {
    setIsErrorPopupOpen(false);
    setErrorPopupText("");
  }

  React.useEffect(() => {}, [history, loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Main isloggedIn={loggedIn} />
            </Route>

            <Route exact path="/movies">
              <Header />
              <ProtectedRoute
                path="/movies"
                loggedIn={loggedIn}
                component={Movies}
                moviesCardsSearchList={moviesCardsSearchList}
                moviesCardsSaved={moviesCardsSaved}
                onSubmitSearchForm={handleSubmitSearchFormMovies}
                isCardsError={isCardsError}
                isLoading={isLoading}
                onLikeClick={handleLikeClick}
              />
              <Footer />
            </Route>

            <Route exact path="/saved-movies">
              <Header />
              <ProtectedRoute
                path="/saved-movies"
                loggedIn={loggedIn}
                component={SavedMovies}
                moviesCardsSaved={moviesCardsSaved}
                onSubmitSearchForm={handleSubmitSearchFormSavedMovies}
                isCardsError={isCardsError}
                isLoading={isLoading}
                onLikeClick={handleLikeClick}
              />
              <Footer />
            </Route>

            <Route exact path="/profile">
              <Header />
              {isLoading ? (
                <Preloader />
              ) : (
                <ProtectedRoute
                  path="/profile"
                  loggedIn={loggedIn}
                  component={Profile}
                  onUpdateUser={handleUpdateUser}
                  onClickSignout={handleClickSignout}
                />
              )}
            </Route>

            <Route exact path="/signup">
              <Register onRegister={handleRegister} loggedIn={loggedIn} />
            </Route>

            <Route exact path="/signin">
              {isLoading ? (
                <Preloader />
              ) : (
                <Login onLoggedIn={handleLoggedIn} loggedIn={loggedIn} />
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
