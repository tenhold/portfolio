import React from 'react';
import Project from './Project';
import { projects } from '../../data/projectData';
import { Grid } from '@material-ui/core';

const Projects: React.FC = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(({ name, description, images }) => (
          <Project name={name} description={description} images={images} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
