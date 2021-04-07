import React from "react";
import "./Navbar.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Navbar() {
  return (
    <div className="navbar-container" data-aos="fade-right" data-duration="1000">
    <div className="navbar">
      <a href="/" className="navbar__link">
        Home
      </a>
      <a href="/" className="navbar__link">
        Education
      </a>
      <a href="/" className="navbar__link">
        Projects  
      </a>
      <a href="/" className="navbar__link">
        Skills
      </a>
      <a href="/" className="navbar__link">
        <span>Contact</span>
        <span>Me</span>
      </a>
    </div>
    </div>
  );
}

export default Navbar;
