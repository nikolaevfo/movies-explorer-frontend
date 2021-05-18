import React from 'react';
import './ErrorPopup.css';

function ErrorPopup(props) {

  React.useEffect(() => {
    if (!props.isOpen) return;
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.addEventListener("keydown", handleEscClose);
    }
  }, [props, props.isOpen, props.onClose]);

  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && props.isOpen) {
      props.onClose();
    }
  }

  return (
    <section className={`error-popup root__popup ${props.isOpen ? 'error-popup_opened' : ''}`} onMouseDown={handleOverlayClose}>
      <div className="error-popup__container">
        <button className="error-popup__button-cross" onClick={props.onClose}></button>
        <h3 className="error-popup__title">Ошибка!</h3>
        <p className="error-popup__text">{ props.errorText}</p>
      </div>
    </section >
  );
}

export default ErrorPopup;