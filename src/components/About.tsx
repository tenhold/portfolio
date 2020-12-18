import React from 'react';
import jon from '../../images/jon.jpg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      alignItems: 'top',
    },
    text: {
      textAlign: 'left',
      // color: theme.palette.text.secondary,
    },
    image: {
      alignItems: 'center',
    },
  })
);

const About = () => {
  const { root, container, text, image } = useStyles();

  return (
    <div className={root}>
      <Grid container className={container} justify='space-evenly'>
        <Grid item xs={12}>
          <Typography variant='h1'>About</Typography>
        </Grid>
        <Grid item xs={6} className={text}>
          <Typography variant='body1'>
            Software developer with experience in JavaScript. Accustomed to
            working in tight-knit crews where communication is key. As a
            photographer, I'm always looking at the small details. Experience
            includes React, Nodejs, Express, Postgres, and MongoDB.
          </Typography>
        </Grid>
        <Grid item xs={3} className={image}>
          <img
            src={jon}
            style={{ maxHeight: '10%', borderRadius: '50%' }}
            alt='Jon'
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
