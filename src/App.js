import "./reset.css";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import HeaderHero from "./components/header/HeaderHero.jsx";
import Projects from "./components/projects/Projects.jsx";

function App() {
  return (
    <div className="App">
      <HeaderHero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
