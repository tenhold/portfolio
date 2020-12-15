import React from 'react';
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
    paper: {
      textAlign: 'left',
      // color: theme.palette.text.secondary,
    },
  })
);

const About = () => {
  const { root, container, paper } = useStyles();

  return (
    <div className={root}>
      <Grid container className={container} justify='space-evenly'>
        <Grid item xs={12}>
          <Typography variant='h1'>About</Typography>
        </Grid>
        <Grid item xs={6} className={paper}>
          <Typography variant='body1'>
            Software developer with experience in JavaScript. Accustomed to
            working in tight-knit crews where communication is key. As a
            photographer, I'm always looking at the small details. Experience
            includes React, Nodejs, Express, Postgres, and MongoDB.
          </Typography>
        </Grid>
        <Grid item xs={3} className={paper}>
          <Typography variant='body1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
            soluta! Blanditiis autem quae debitis. Iusto magni a voluptate
            distinctio pariatur, praesentium sint eos consequatur temporibus
            mollitia ex! Nemo, facere quod?
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
