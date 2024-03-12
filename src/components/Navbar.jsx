import React from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src="Logo" alt="Logo Image" stlye={{ width: "50px" }} />
      </div>
      {/* Menu */}
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* Mobile Menu */}
      <div>
        <ul className="hidden">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Social icons */}
    </div>
  );
};

export default Navbar;
