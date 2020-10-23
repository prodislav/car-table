import React from 'react';
import './style.css';

function Modal(props) {
  const { onSave, onClose } = props;
  return (
    <div className="modal-wrapper">
      <button type="button" className="close-btn" onClick={onClose}>
        х
      </button>
      <form className="modal-form" onSubmit={onSave}>
        <input
          type="text"
          className="form-input"
          required
          placeholder="Enter brand of a car*" />
        <input
          type="text"
          className="form-input"
          required
          placeholder="Enter model of a car*" />
        <input
          type="number"
          className="form-input"
          required
          placeholder="Enter year of a car production" />
        <input
          type="text"
          className="form-input"
          placeholder="Enter country of a car production" />
        <input
          type="text"
          className="form-input"
          placeholder="Enter color of a car*" />
        <input
          type="number"
          className="form-input"
          required
          placeholder="Enter prise of a car*" />
        <button type="submit" className="button">
          Save
        </button>
      </form>
    </div>
  );
}

export default Modal;
