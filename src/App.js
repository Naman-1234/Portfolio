
import Navbar from './Components/Navbar/Navbar';
import "./Components/FrontPage/FrontPage";
import FrontPage from './Components/FrontPage/FrontPage';
import './App.css';
import Education from './Components/Education/Education';
import Project from "./Components/Project/Project";
function App() {
  return (
    <div>
    <Navbar/>
    <FrontPage />
    <Education />
    <Project />
    </div>
  );
}

export default App;
