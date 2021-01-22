import React from 'react';
import Project from './Project';
import { projects } from '../../data/projectData';

const Projects: React.FC = () => {
  return (
    <div className='main'>
      <div className='slash' id='slash-3'></div>
      <div className='slash' id='slash-4'></div>
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
