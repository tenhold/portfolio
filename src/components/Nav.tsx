import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Grid, Button, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import '../App.css';

const Nav = () => {
  return (
    <div>
      <nav>
        <Grid item>
          <NavLink to='/' exact className='home-Link'>
            <h1>Jon Tenholder</h1>
          </NavLink>
        </Grid>
        <ul className='nav-Links'>
          <NavLink to='/about'>
            <h3>About</h3>
          </NavLink>
          <NavLink to='/projects'>
            <h3>Projects</h3>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
