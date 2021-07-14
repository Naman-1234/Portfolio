import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './History';
import FrontPage from './Components/FrontPage/FrontPage';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Achievements from './Components/Achievements/Achievements';
function Routes() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={FrontPage} />
        <Route exact path='/projects' component={Project} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/achievements' component={Achievements} />
      </Switch>
    </Router>
  );
}
export default Routes;
