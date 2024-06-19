import React from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        {children}
        <button className="modal__close" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Modal;
