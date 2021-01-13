import React from 'react';
import jon from '../../images/jon.jpg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      alignItems: 'top',
      padding: '2em 0 0 0',
    },
    text: {
      textAlign: 'left',
      padding: '0 2em',
      // color: theme.palette.text.secondary,
    },
    image: {
      alignItems: 'center',
      maxHeight: '200px',
      borderRadius: '50%',
      margin: '0px',
    },
  })
);

const About = () => {
  const { container, text, image } = useStyles();

  return (
    <div className='main'>
      <Grid container className={container} justify='space-evenly'>
        <Grid item xs={12} className={image}>
          <img className={image} src={jon} alt='Jon' />
        </Grid>
        <Grid item xs={12} className={text}>
          <p>
            Software developer with experience in JavaScript. Accustomed to
            working in tight-knit crews where communication is key. As a
            photographer, I'm always looking at the small details. Experience
            includes React, Nodejs, Express, Postgres, and MongoDB.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
