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

  const project1 = {
    title: "Weather Dashboard",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.`,
  };

  const project2 = {
    title: "Expense Tracker",
    description: `Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  };

  const project3 = {
    title: "Portfolio Website",
    description: `Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.`,
  };

  const project4 = {
    title: "Task Tracker",
    description: `Stay organized and boost your productivity with our Task Tracker
  app, now enhanced with ChatGPT integration. This innovative app not
  only helps you manage your tasks efficiently but also provides
  intelligent assistance to keep you on track. Whether you're planning
  your day, setting reminders, or collaborating with teammates, our
  ChatGPT-powered Task Tracker offers personalized suggestions,
  automated task prioritization, and real-time support.`,
  };

  return (
    <div className="projects">
      <div className="projects__section">
        <div className="project" onClick={() => handleClick(project1)}>
          <h3 className="project__title">{project1.title}</h3>
          <p className="project__description">{project1.description}</p>
          <ul className="project__technologies">
            <li className="project__technology">HTML</li>
            <li className="project__technology">CSS</li>
            <li className="project__technology">JavaScript</li>
            <li className="project__technology">React</li>
          </ul>
        </div>
        <div className="project" onClick={() => handleClick(project2)}>
          <h3 className="project__title">{project2.title}</h3>
          <p className="project__description">{project2.description}</p>
          <ul className="project__technologies">
            <li className="project__technology">HTML</li>
            <li className="project__technology">CSS</li>
            <li className="project__technology">JavaScript</li>
            <li className="project__technology">React</li>
          </ul>
        </div>
      </div>
      <div className="projects__section">
        <div className="project" onClick={() => handleClick(project3)}>
          <h3 className="project__title">{project3.title}</h3>
          <p className="project__description">{project3.description}</p>
          <ul className="project__technologies">
            <li className="project__technology">HTML</li>
            <li className="project__technology">CSS</li>
            <li className="project__technology">JavaScript</li>
            <li className="project__technology">React</li>
          </ul>
        </div>
        <div className="project" onClick={() => handleClick(project4)}>
          <h3 className="project__title">{project4.title}</h3>
          <p className="project__description">{project4.description}</p>
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
