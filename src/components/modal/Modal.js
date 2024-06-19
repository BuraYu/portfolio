import React from "react";
import "./modal.css";
import smoker from "../../images/smoker.jpg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <img src={smoker} className="smoker" />
        {/* {children}
        {console.log(children[0].props.children)} */}

        <div className="modal__description">
          <h3 className="project__title">{children[0].props.children}</h3>
          <p className="project__description">{children[1].props.children}</p>
          <ul className="project__technologies">
            <li className="project__technology">HTML</li>
            <li className="project__technology">CSS</li>
            <li className="project__technology">JavaScript</li>
            <li className="project__technology">React</li>
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
