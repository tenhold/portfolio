import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Example from './components/Carousel';
import './style/App.css';
import './style/Home.css';
import './style/Projects.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/carousel' component={Example} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
