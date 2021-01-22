import React from 'react';
import { NavLink } from 'react-router-dom';
import Linkedin from '../svgs/Linkedin';
import Github from '../svgs/Github';
import Hamburger from '../svgs/Hamburger';
import Logo from '../svgs/Logo';

const Nav: React.FC = () => {
  const handleClick = () => {
    console.log('hello from click');
  };

  return (
    <nav>
      <NavLink to='/' exact className='home-link'>
        {/* <h1>Jon Tenholder</h1> */}
        <Logo className='logo' width='70' height='70' />
      </NavLink>
      <Hamburger className='hamburger' onClick={handleClick} />
      <ul className='nav-links'>
        <li>
          <NavLink to='/about'>
            <h3>about</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects'>
            <h3>projects</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact'>
            <h3>contact</h3>
          </NavLink>
        </li>
        <li>
          {/* {window.open('https://www.linkedin.com/in/jon-tenholder-583128191/')} */}
          <a
            href='https://www.linkedin.com/in/jon-tenholder-583128191/'
            target='_blank'
            rel='noreferrer noopener'>
            <Linkedin className='social' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/tenhold'
            target='_blank'
            rel='noreferrer noopener'>
            <Github className='social' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
