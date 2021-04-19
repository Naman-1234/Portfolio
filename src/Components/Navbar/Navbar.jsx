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
        Home
      </a>
      <a href="#educationPage" className="navbar__link">
        Education
      </a>
      <a href="#projectPage" className="navbar__link">
        Projects  
      </a>
      <a href="#skillsPage" className="navbar__link">
        Skills
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
