import React from 'react';

const Project = ({ name, description, images }) => (
  <li>
    <h3>{name}</h3>
    <p>{description}</p>
    <img src={images} alt='missing' />
  </li>
);
export default Project;
