import React from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar-container">
    <div className="navbar">
      <a href="/" className="navbar-link">
        Home
      </a>
      <a href="/" className="navbar-link">
        Education
      </a>
      <a href="/" className="navbar-link">
        Projects  
      </a>
      <a href="/" className="navbar-link">
        Skills
      </a>
      <a href="/" className="navbar-link">
        <span>Contact</span>
        <span>Me</span>
      </a>
    </div>
    </div>
  );
}

export default Navbar;
