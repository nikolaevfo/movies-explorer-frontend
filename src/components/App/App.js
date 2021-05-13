import React, { useState } from 'react';
import './App.css';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <div className="root">
      <div className="page">
        <Header
          isBurgerOpen={isBurgerOpen}
          onBurgerClick={handleBurgerClick}
        />
        {/* <Main />
        <Footer /> */}
        {/* <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/">
            <Header />

            <Switch>
              <Route path="/movies">
                <Movies />
              </Route>

              <Route path="/saved-movies">
                <SavedMovies />
              </Route>

              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>

            <Footer />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>

        </Switch> */}
      </div>
    </div>
  );
}

export default App; 