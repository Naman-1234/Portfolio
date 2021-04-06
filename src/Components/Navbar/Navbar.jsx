import React from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar-container">
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
