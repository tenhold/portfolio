import React from 'react';
import jon from '../../images/jon.jpg';

const About = () => {
  return (
    <div className='about-me'>
      <div className='slash' id='slash-3'></div>
      <div className='slash' id='slash-4'></div>
      <div className='about-img'>
        <img className='jon' src={jon} alt='Jon' />
      </div>
      <div className='about-p'>
        <h2>about me</h2>
        <h3>Hi, my name is Jon.</h3>
        <p>
          I'm a Software Developer, accustomed to working in tight-knit crews
          where communication is key. As a photographer, I'm always looking at
          the small details. Experience includes JavaScript, TypeScript,
          Node.js, React, Express, Postgres, and MongoDB.
        </p>
      </div>
    </div>
  );
};

export default About;
