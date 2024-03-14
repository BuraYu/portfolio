import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src="Logo" alt="Logo Image" stlye={{ width: "200px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-pink-600 transition-all">Home</li>
        <li className="hover:text-pink-600 transition-all">About</li>
        <li className="hover:text-pink-600 transition-all">Skills</li>
        <li className="hover:text-pink-600 transition-all">Work</li>
        <li className="hover:text-pink-600 transition-all">Contact</li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-pink-600 transition-all">
          Home
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 transition-all">
          About
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 transition-all">
          Skills
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 transition-all">
          Work
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 transition-all">
          Contact
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] pr-4 flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-lg font-semibold"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] pr-4 flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-lg font-semibold"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] pr-4 flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-lg font-semibold"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] pr-4 flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-lg font-semibold"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
