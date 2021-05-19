import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from "../../hooks/useForm"
import './Register.css';

import Logo from '../Logo/Logo';

function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleRegisterSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="register__logo-link"><Logo /></Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form action="#" name="registerForm" className="register__form" onSubmit={handleRegisterSubmit}>
          <label className="register__form-label"> Имя
            <input type="text" name="name" placeholder="Введите Ваше имя"
           className={`${!errors.name
              ? `register__form-iput-text`
              : `register__form-iput-text register__form-iput-text_invalid`}`} required
            minLength="2" maxLength="40" onChange={handleChange}
            value={values.name || ''}
          />
          </label>
          <span className="register__form-iput-text-error">{errors.name || ''}</span>

          <label className="register__form-label">E-mail
            <input type="email" name="email" placeholder="Введите Ваш email"
            className={`${!errors.email
              ? `register__form-iput-text`
              : `register__form-iput-text register__form-iput-text_invalid`}`} required
            minLength="2" maxLength="40" onChange={handleChange}
            value={values.email || ''}
          />
          </label>
          <span className="register__form-iput-text-error">{errors.email || ''}</span>

          <label className="register__form-label">Пароль
            <input type="password" name="password" placeholder="Введите Ваш пароль"
            className={`${!errors.password
              ? `register__form-iput-text`
              : `register__form-iput-text register__form-iput-text_invalid`}`} required
            minLength="6" maxLength="40" onChange={handleChange}
            value={values.password || ''}
          />
          </label>
          <span className="register__form-iput-text-error">{errors.password || ''}</span>

          <button
            type="submit"
            disabled={!isValid}
            className={`${isValid
              ? `register__form-button-reg`
              : `register__form-button-reg register__form-button-reg_invalid`}`}>Зарегистрироваться</button>
        </form>
        <p className="register__link-text">Уже зарегистрированы?
          <Link to="/signin" className="register__link">Войти</Link>
        </p>
      </div>
    </section >
  )
};

export default Register;