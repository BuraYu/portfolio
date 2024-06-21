import React from "react";
import "./headerHero.css";
import logo from "../../images/logo_placeholder.png";
import lol from "../../images/lol.jpg";
import { HashLink as Link } from "react-router-hash-link";

const HeaderHero = () => {
  //scrolling nav bar sticky? Change it? go up button?
  //add hamburger menu
  return (
    <section className="headerHero__container" id="headerHero__section">
      <header>
        <img className="header__logo" src={logo} alt="logo of Burak"></img>
        <nav>
          <ul className="nav__links">
            <li>
              <Link smooth to="#headerHero__section">
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="#about__section">
                About me
              </Link>
            </li>

            <li>
              <Link smooth to="#projects__section">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="cta" smooth to="#contact__section">
          <button className="headerHero__button">Contact</button>
        </Link>
      </header>
      <section className="heroSection">
        <h1>Burak is a Fullstack Developer. Hello.</h1>
        <img
          src={lol}
          alt="laughing John Jonah Jameson at Burak finding a job"
        ></img>
      </section>
    </section>
  );
};

export default HeaderHero;
