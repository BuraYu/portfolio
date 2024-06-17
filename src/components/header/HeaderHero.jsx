import React from "react";
import "./headerHero.css";
import logo from "../../images/logo_placeholder.png";
import lol from "../../images/lol.jpg";

const HeaderHero = () => {
  //scrolling nav bar sticky? Change it? go up button?
  return (
    <div className="headerHero__container">
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
      <section className="heroSection">
        <h1>Burak is a Fullstack Developer. Hello.</h1>
        <img
          src={lol}
          alt="laughing John Jonah Jameson at Burak finding a job"
        ></img>
      </section>
    </div>
  );
};

export default HeaderHero;
