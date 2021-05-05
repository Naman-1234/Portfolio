import {React,useState,useEffect} from 'react';
import Loader from "react-loader-spinner";
import Navbar from './Components/Navbar/Navbar';
import "./Components/FrontPage/FrontPage";
import FrontPage from './Components/FrontPage/FrontPage';
import './App.css';
import Education from './Components/Education/Education';
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  const [loaded,setloaded] = useState(false);
  useEffect(() => {
    const update= ()=>{
    setTimeout(()=>{setloaded(true)},1500);
    }
    update();
  },);
  if(!loaded) {
  return (
    <div className="loader">
    <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000} //3 secs
  />
  </div>
  )
  }
  if(loaded) {
  return (
    <div>
 
    <Navbar/>
    <FrontPage />
    <Education />
    <Project />
    <Skills />
    <Contact />
    </div>
  )
  }
}

export default App;
