import React from 'react';
import { Grid } from '@material-ui/core';
import prostImg from '../../images/prost.png';

const Projects = () => {
  const projects = [
    {
      name: 'Prost',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      images: prostImg,
    },
    {
      name: 'Trailr',
      description: `Lorem ipsum trair sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`,
      images: null,
    },
  ];
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(({ name, description, images }) => (
          <li>
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={images} alt='missing' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
