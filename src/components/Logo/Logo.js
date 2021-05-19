import React from 'react';
import './Logo.css';

import logoImg from '../../images/logo.svg';

function Logo() {

  return (
    <div className="logo__container">
      <img src={logoImg} alt="Лого" className="logo__img" />
    </div>
  );
};

export default Logo;
