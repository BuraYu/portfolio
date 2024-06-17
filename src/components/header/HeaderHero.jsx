import React from "react";
import "./headerHero.css";
import logo from "../../images/logo_placeholder.png";

const HeaderHero = () => {
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
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
      <a className="cta" href="#">
        <button>Contact</button>
      </a>
    </header>
  );
};

export default HeaderHero;
