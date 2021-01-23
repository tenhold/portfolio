import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import Error404 from './components/Error';
import './style/App.css';
import './style/Home.css';
import './style/About.css';
import './style/Projects.css';
import './style/Contact.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};
export default App;
