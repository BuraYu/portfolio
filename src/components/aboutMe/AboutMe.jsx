import React from "react";
import "./aboutMe.css";
import goku from "../../images/goku-lol.gif";

const AboutMe = () => {
  return (
    <div className="aboutme__container">
      <div className="aboutme__description">
        <h2 className="about">About Me</h2>
        <p>
          Hello! I'm Burak, a passionate Fullstack Developer with a knack for
          creating dynamic and responsive web applications. With a strong
          foundation in both front-end and back-end technologies, I enjoy
          building projects that are not only functional but also provide an
          excellent user experience.
        </p>
        <p>
          My journey in web development started with an insatiable curiosity for
          technology and a desire to understand how things work behind the
          scenes. Over the years, I have honed my skills in languages and
          frameworks such as JavaScript, React, Node.js, Express, and more.
          Whether it's designing a sleek user interface or optimizing
          server-side logic, I strive to deliver high-quality solutions that
          meet the needs of users and clients alike.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or enjoying a good laugh with
          friends. I believe in continuous learning and am always on the lookout
          for new challenges that push my boundaries as a developer.
        </p>
        <p>
          Feel free to explore my projects and reach out if you'd like to
          collaborate or just have a chat. Let's build something amazing
          together!
        </p>
      </div>
      <div className="aboutme__image">
        <img src={goku} alt="Son Goku" />
      </div>
    </div>
  );
};

export default AboutMe;
