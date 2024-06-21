import "./reset.css";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact.jsx";
import HeaderHero from "./components/header/HeaderHero.jsx";
import Projects from "./components/projects/Projects.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderHero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
