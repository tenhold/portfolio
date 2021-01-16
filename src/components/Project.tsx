import React from 'react';

interface Props {
  name: string;
  description: string;
  technologies: string[];
  images: string | undefined;
  repo: string;
}

const Project: React.FC<Props> = ({
  name,
  description,
  technologies,
  images,
  repo,
}) => (
  <div className='container'>
    <div className='column'>
      <h2>{name}</h2>
      <p>{description}</p>
      <h4>Technologies used:</h4>
      <ul>
        {technologies.map((technology) => (
          <li>{technology}</li>
        ))}
      </ul>
    </div>
    <div className='images'>
      <img src={images} alt='missing' />
      <button onClick={() => window.open(repo)}>{`</repo>`}</button>
    </div>
  </div>
);

export default Project;
