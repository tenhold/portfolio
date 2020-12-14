import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
