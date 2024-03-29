import { React, useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Navbar from './Components/Navbar/Navbar';
import './Components/FrontPage/FrontPage';
import FrontPage from './Components/FrontPage/FrontPage';
import './App.css';
import Education from './Components/Education/Education';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Routes from './Routes';
function App() {
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    const update = () => {
      setTimeout(() => {
        setloaded(true);
      }, 1500);
    };
    update();
  });
  return (
    <div>
      {!loaded ? (
        <div className='loader'>
          <Loader
            type='BallTriangle'
            color='#00BFFF'
            height={150}
            width={150}
          />
        </div>
      ) : (
        <div>
          <Routes />
        </div>
      )}
    </div>
  );
}

export default App;
