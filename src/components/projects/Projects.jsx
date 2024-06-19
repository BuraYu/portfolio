import React, { useState } from "react";
import "./projects.css";
import Modal from "../modal/Modal";

//click open preview gif, link to github etc...

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <div className="projects">
      <div className="projects__section">
        <div
          className="project"
          onClick={() =>
            handleClick({ title: "Task Tracker", description: "..." })
          }
        >
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
        </div>
        <div
          className="project"
          onClick={() =>
            handleClick({ title: "Task Tracker", description: "..." })
          }
        >
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
        </div>
      </div>
      <div className="projects__section">
        <div
          className="project"
          onClick={() =>
            handleClick({ title: "Task Tracker", description: "..." })
          }
        >
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
        </div>
        <div
          className="project"
          onClick={() =>
            handleClick({ title: "Task Tracker", description: "..." })
          }
        >
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
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h2>{selectedProject?.title}</h2>
        <p>{selectedProject?.description}</p>
      </Modal>
    </div>
  );
};

export default Projects;
