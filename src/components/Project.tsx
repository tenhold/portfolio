import React from 'react';
import Carousel from './Carousel';

interface Props {
  name: string;
  description: string;
  technologies: string[];
  images: string[];
  repo: string;
}

const Project: React.FC<Props> = ({
  name,
  description,
  technologies,
  images,
  repo,
}) => (
  <div className='container' id={name}>
    <div className='column'>
      <h2>{name}</h2>
      <h4>Description</h4>
      <p>{description}</p>
      <h4>Technologies used</h4>
      <ul>
        {technologies.map((technology, i) => (
          <li key={i}>{technology}</li>
        ))}
      </ul>
    </div>
    <div className='images'>
      <Carousel images={images} />
      {/* <img src={images[0]} alt='missing' /> */}
      <button onClick={() => window.open(repo)}>{`</repo>`}</button>
    </div>
  </div>
);

export default Project;
