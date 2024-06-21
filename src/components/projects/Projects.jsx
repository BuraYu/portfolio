import React, { useState } from "react";
import "./projects.css";
import Modal from "../modal/Modal";

//add image in the array for each project
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

  const projects = [
    {
      title: "Weather Dashboard",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.`,
      techStack: ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
    },

    {
      title: "Expense Tracker",
      description: `Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      techStack: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "NextJS"],
    },
    {
      title: "Portfolio Website",
      description: `Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.`,
      techStack: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Task Tracker",
      description: `Stay organized and boost your productivity with our Task Tracker
  app, now enhanced with ChatGPT integration. This innovative app not
  only helps you manage your tasks efficiently but also provides
  intelligent assistance to keep you on track. Whether you're planning
  your day, setting reminders, or collaborating with teammates, our
  ChatGPT-powered Task Tracker offers personalized suggestions,
  automated task prioritization, and real-time support.`,
      techStack: ["HTML", "CSS", "JavaScript"],
    },
  ];

  // add key to elements
  return (
    <div className="projects">
      <div className="projects__section">
        {projects.map((e, i) => (
          <div className="project" onClick={() => handleClick(projects[i])}>
            <h2 className="project__title">{e.title}</h2>
            <p className="project__description">{e.description}</p>
            <ul className="project__technologies">
              {projects[i].techStack.map((element, index) => (
                <li key={element + index} className="project__technology">
                  {element}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h2>{selectedProject?.title}</h2>
        <p>{selectedProject?.description}</p>
        <p>{selectedProject?.techStack}</p>
      </Modal>
    </div>
  );
};

export default Projects;
