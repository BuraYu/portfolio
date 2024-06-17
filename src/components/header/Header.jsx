import React from "react";
import "./header.css";
import logo from "../../images/logo_placeholder.png";

const Header = () => {
  return (
    <header>
      <img className="header__logo" src={logo} alt="logo of Burak"></img>
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Hero</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Socials</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
