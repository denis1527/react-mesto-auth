import React from 'react';
import SuccessImg from '../images/success-icon.svg';
import FailedImg from '../images/failed-icon.svg';

function InfoTooltip({ isOpen, onClose, registerError, text }) {
  function handleOverlayClick(e) {
    if(e.currentTarget === e.target) {
      onClose();
    }
  }

  return (
    <div className={`tooltip ${isOpen ? 'tooltip_open' : ''}`} onClick={handleOverlayClick}>
      <div className="tooltip__container">
        <img className="tooltip__img" src={`${registerError ? FailedImg : SuccessImg}`} alt="Результат регистрации" />
        <p className="tooltip__text">
          {text}
        </p>
        <button className="tooltip__close-btn" type="button" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;
