import React from "react";
import "./Navbar.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Navbar() {
  return (
    <div className="navbar-container" data-aos="fade-right" data-duration="1000">
    <div className="navbar">
      <a href="#frontPage" className="navbar__link">
        <span>Home</span>
      </a>
      <a href="#educationPage" className="navbar__link">
        <span>Education</span>
      </a>
      <a href="#projectPage" className="navbar__link">
        <span>Projects</span>
      </a>
      <a href="#skillsPage" className="navbar__link">
        <span>Skills</span>
      </a>
      <a href="#contactPage" className="navbar__link">
        <span>Contact</span>
        <span>Me</span>
      </a>
    </div>
    </div>
  );
}

export default Navbar;
