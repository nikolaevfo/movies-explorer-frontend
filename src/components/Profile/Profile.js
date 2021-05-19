import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from "../../hooks/useForm"
import './Profile.css';

function Profile(props) {
  const { values, handleChange, setValues, errors, isValid, resetForm, setIsValid } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      resetForm();
      setIsValid(true);
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      })
    }
  }, [currentUser, resetForm, setIsValid, setValues]); 

  function handleProfileSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, { currentUser.name }!</h2>
        <form action="#" name="profileForm" className="profile__form" onSubmit={handleProfileSubmit}>
          <label className="profile__form-label"> Имя
            <input type="text" name="name" placeholder="Введите Ваше имя"
            className={`${!errors.name
              ? `profile__form-iput-text`
              : `profile__form-iput-text profile__form-iput-text_invalid`}`}
            required minLength="2" maxLength="40" onChange={handleChange}
            value={values.name || ''}
          />
          </label>
          <span className="profile__form-iput-text-error">{errors.name || ''}</span>

          <label className="profile__form-label">E-mail
            <input type="email" name="email" placeholder="Введите Ваш email"
            className={`${!errors.email
              ? `profile__form-iput-text`
              : `profile__form-iput-text profile__form-iput-text_invalid`}`}
            required minLength="2" maxLength="40" onChange={handleChange}
            value={values.email || ''}
          />
          </label>
          <span className="profile__form-iput-text-error">{errors.email || ''}</span>

          <button
            type="submit"
            disabled={!isValid}
            className={`${isValid
              ? `profile__form-button-edit`
              : `profile__form-button-edit profile__form-button-edit_invalid`}`}>Редактировать</button>
        </form>
        <button className="profile__form-button-signout" onClick={props.onClickSignout}>Выйти из аккаунта</button>
      </div>
    </section >
  )
};

export default Profile;