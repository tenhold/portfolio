import React from 'react';
import { NavLink } from 'react-router-dom';
import Linkedin from '../svgs/Linkedin';
import Github from '../svgs/Github';
import '../App.css';

const Nav: React.FC = () => {
  return (
    <nav>
      <NavLink to='/' exact className='home-Link'>
        <h1>Jon Tenholder</h1>
      </NavLink>
      <ul className='nav-Links'>
        <li>
          <NavLink to='/about'>
            <h3>About</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects'>
            <h3>Projects</h3>
          </NavLink>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/jon-tenholder-583128191/'>
            <Linkedin className='social' />
          </a>
        </li>
        <li>
          <a href='https://github.com/tenhold'>
            <Github className='social' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
