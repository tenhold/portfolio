import React from 'react';
import Project from './Project';
import { projects } from '../../data/projectData';
import { Grid } from '@material-ui/core';

const Projects: React.FC = () => {
  return (
    <div className='main'>
      {/* <h1>Projects</h1> */}
      <div>
        {projects.map(({ name, description, technologies, images, repo }) => (
          <Project
            name={name}
            description={description}
            technologies={technologies}
            images={images}
            repo={repo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
