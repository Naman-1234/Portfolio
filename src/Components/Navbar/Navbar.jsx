import React from 'react';
import './Navbar.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();
function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar__link'>
        <span>Home</span>
      </Link>
      <Link to='/education' className='navbar__link'>
        <span>Education</span>
      </Link>
      <Link to='/achievements' className='navbar__link'>
        <span>Achievements</span>
      </Link>
      <Link to='/projects' className='navbar__link'>
        <span>Projects</span>
      </Link>
      <Link to='/skills' className='navbar__link'>
        <span>Skills</span>
      </Link>
      <Link to='/contact' className='navbar__link'>
        <span>Contact</span>
        <span>Me</span>
      </Link>
    </div>
  );
}

export default Navbar;
