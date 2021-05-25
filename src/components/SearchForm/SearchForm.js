import React, { useState } from "react";
import { useFormWithValidation } from "../../hooks/useForm";
import "../../vendor/container.css";
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();
  const [errorText, setErrorText] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    onSubmit(values.search);
    resetForm();
  }

  function handleSearchClick() {
    if (!isValid) {
      setErrorText("Нужно ввести ключевое слово");
    }
  }
  React.useEffect(() => {
    setErrorText("");
  }, [values]);
  return (
    <section className="search-form">
      <div className="search-form__container container">
        <form
          action="#"
          className="search-form__form"
          name="searchForm"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            name="search"
            className="search-form__input-text"
            placeholder="Фильм"
            minLength="1"
            onChange={handleChange}
            value={values.search || ""}
            required
          />
          <span className="search-form__form-iput-text-error">
            {errorText || ""}
          </span>
          <div className="searh-form__button-wrapper">
            <button
              className="search-form__button-submit"
              type="submit"
              onClick={handleSearchClick}
            />
          </div>
          <label className="search-form__checkbox-label">
            Короткометражки
            <input type="checkbox" className="search-form__checkbox-input" />
            <span className="search-form__checkbox-slider"></span>
          </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
