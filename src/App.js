
import Navbar from './Components/Navbar/Navbar';
import "./Components/FrontPage/FrontPage";
import FrontPage from './Components/FrontPage/FrontPage';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos';
AOS.init();
function App() {
  return (
    <div>
    <Navbar/>
    <FrontPage />
    </div>
  );
}

export default App;
