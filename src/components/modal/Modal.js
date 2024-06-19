import React from "react";
import "./modal.css";
import smoker from "../../images/smoker.jpg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <img src={smoker} className="smoker" />
        <div className="modal__description">
          <h3 className="project__title">{children[0].props.children}</h3>
          <p className="project__description">{children[1].props.children}</p>
          <ul className="project__technologies">
            {children[2].props.children.map((element, index) => (
              <li key={index} className="project__technology">
                {element}
              </li>
            ))}
          </ul>

          <div className="modal__links">
            <a href="">GitHub</a>
            <a href="">Website</a>
          </div>
        </div>

        <button className="modal__close" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Modal;
