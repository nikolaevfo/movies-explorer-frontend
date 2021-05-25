import React from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useForm";
import "./Login.css";

import Logo from "../Logo/Logo";

function Login({ onLoggedIn }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleLoginSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLoggedIn({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__logo-link">
          <Logo />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form
          action="#"
          name="loginForm"
          className="login__form"
          onSubmit={handleLoginSubmit}
        >
          <label className="login__form-label">
            E-mail
            <input
              type="email"
              name="email"
              placeholder="Введите Ваш email"
              className={`${
                !errors.email
                  ? `login__form-iput-text`
                  : `login__form-iput-text login__form-iput-text_invalid`
              }`}
              required
              minLength="2"
              maxLength="40"
              onChange={handleChange}
              value={values.email || ""}
            />
          </label>
          <span className="login__form-iput-text-error">
            {errors.email || ""}
          </span>

          <label className="login__form-label">
            Пароль
            <input
              type="password"
              name="password"
              placeholder="Введите Ваш пароль"
              className={`${
                !errors.password
                  ? `login__form-iput-text`
                  : `login__form-iput-text login__form-iput-text_invalid`
              }`}
              required
              maxLength="40"
              onChange={handleChange}
              value={values.password || ""}
            />
          </label>
          <span className="login__form-iput-text-error">
            {errors.password || ""}
          </span>

          <button
            type="submit"
            disabled={!isValid}
            className={`${
              isValid
                ? `login__form-button-reg`
                : `login__form-button-reg login__form-button-reg_invalid`
            }`}
          >
            Войти
          </button>
        </form>
        <p className="login__link-text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
