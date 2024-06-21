import React from "react";
import "./footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="social-footer">
      <SocialIcon url="www.xing.de" />
      <SocialIcon url="www.github.com" />
      <SocialIcon url="www.linkedin.com" />
    </footer>
  );
};

export default Footer;
