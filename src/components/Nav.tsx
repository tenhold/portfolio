import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Button, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import '../App.css';

const Nav = () => {
  return (
    <div>
      <nav>
        <Grid item>
          <Typography variant='h3'>Jon Tenholder</Typography>
        </Grid>
        <ul className='nav-Links'>
          <Link to='/'>
            <Typography variant='h6'>Home</Typography>
          </Link>
          <Link to='/about'>
            <Typography variant='h6'>About</Typography>
          </Link>
          <Link to='/projects'>
            <Typography variant='h6'>Projects</Typography>
          </Link>
          <Link to='/carousel'>
            <Typography variant='h6'>Carousel</Typography>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
