import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return (
    <div>
      <nav>
        <ul className='nav-Links'>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/projects'>
            <li>Projects</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
