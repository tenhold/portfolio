import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import '../App.css';

const Nav = () => {
  return (
    <div>
      <nav>
        <ul className='nav-Links'>
          <Link to='/about'>
            <Typography variant='h6'>About</Typography>
          </Link>
          <Link to='/projects'>
            <Typography variant='h6'>Projects</Typography>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
