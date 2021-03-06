import React from "react";
import "./Main.css";

import Promo from "../Promo/Promo";

import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main({ isloggedIn }) {
  return (
    <div className="main">
      <Promo isloggedIn={isloggedIn} />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default Main;
