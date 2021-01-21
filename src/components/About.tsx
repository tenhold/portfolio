import React from 'react';
import jon from '../../images/jon.jpg';

const About = () => {
  return (
    <div className='main'>
      <div>
        <img className='me' src={jon} alt='Jon' />
      </div>
      <div>
        <p>
          Software developer with experience in JavaScript. Accustomed to
          working in tight-knit crews where communication is key. As a
          photographer, I'm always looking at the small details. Experience
          includes React, Nodejs, Express, Postgres, and MongoDB.
        </p>
      </div>
    </div>
  );
};

export default About;
