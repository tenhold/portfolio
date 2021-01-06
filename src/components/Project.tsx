import React from 'react';

interface Props {
  name: string;
  description: string;
  images: string | undefined;
}

const Project: React.FC<Props> = ({ name, description, images }) => (
  <li>
    <h3>{name}</h3>
    <p>{description}</p>
    <img src={images} alt='missing' />
  </li>
);

export default Project;
