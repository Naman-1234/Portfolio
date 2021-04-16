import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import "./Components/FrontPage/FrontPage";
import FrontPage from './Components/FrontPage/FrontPage';
import './App.css';
import Education from './Components/Education/Education';
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div>
    <Navbar/>
    <FrontPage />
    <Education />
    <Project />
    <Skills />
    <Contact />
    </div>
  );
}

export default App;
