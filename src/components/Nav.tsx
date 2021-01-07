import React from 'react';
import { NavLink } from 'react-router-dom';
import Linkedin from '../svgs/Linkedin';
import Github from '../svgs/Github';
import Hamburger from '../svgs/Hamburger';

const Nav: React.FC = () => {
  const handleClick = () => {
    console.log('hello from click');
  };

  return (
    <nav>
      <NavLink to='/' exact className='home-link'>
        <h1>Jon Tenholder</h1>
      </NavLink>
      <ul className='nav-links'>
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
      <Hamburger className='hamburger' onClick={handleClick} />
    </nav>
  );
};

export default Nav;
