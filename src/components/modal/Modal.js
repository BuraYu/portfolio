import React from "react";
import "./modal.css";
import smoker from "../../images/smoker.jpg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <img src={smoker} className="smoker" />
        {children}
        <div className="modal__description">
          <h3 className="project__title">Task Tracker</h3>
          <p className="project__description">
            Stay organized and boost your productivity with our Task Tracker
            app, now enhanced with ChatGPT integration. This innovative app not
            only helps you manage your tasks efficiently but also provides
            intelligent assistance to keep you on track. Whether you're planning
            your day, setting reminders, or collaborating with teammates, our
            ChatGPT-powered Task Tracker offers personalized suggestions,
            automated task prioritization, and real-time support.
          </p>
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
