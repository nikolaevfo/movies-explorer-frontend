import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Promo.css";
import "../../vendor/container.css";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";

import mainPromoWeb from "../../images/main-promo-web.svg";

function Promo({ isloggedIn }) {
  const [promoHeight, setPromoHeight] = useState(null);

  React.useEffect(() => {
    let heightPromo = document.querySelector(".promo").clientHeight;
    setPromoHeight(heightPromo);
  }, [promoHeight]);

  function handleMoreClick() {
    let scrollOptions = {
      left: 0,
      top: promoHeight,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  }

  return (
    <div className="promo">
      <div className="promo__container container">
        {isloggedIn ? (
          <Header isPromoHeader={true} />
        ) : (
          <div className="promo__header">
            <Link to="/" className="promo__logo-link">
              <Logo />
            </Link>
            <nav className="promo__header-nav">
              <ul className="promo__header-nav-buttons">
                <li className="promo__header-nav-item">
                  <Link to="/signup" className="promo__header-link">
                    Регистрация
                  </Link>
                </li>
                <li className="promo__header-nav-item">
                  <Link to="/signin" className="promo__header-link">
                    Войти
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="promo__content">
          <div className="promo__text-column">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="promo__info-text">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
            <button className="promo__content-button" onClick={handleMoreClick}>
              Узнать больше
            </button>
          </div>
          <img src={mainPromoWeb} alt="Web" className="promo__content-img" />
        </div>
      </div>
    </div>
  );
}

export default Promo;
