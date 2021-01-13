import React from 'react';

interface Props {
  name: string;
  description: string;
  images: string | undefined;
}

const Project: React.FC<Props> = ({ name, description, images }) => (
  <li>
    <h2>{name}</h2>
    <div className='proj-body'>
      <p>
        Ipsum cillum anim cupidatat ut Lorem excepteur exercitation consequat
        anim ipsum. Et sit proident consectetur amet ipsum sint dolore id. Esse
        id dolor consectetur adipisicing non eu. Pariatur nisi cillum deserunt
        sunt eu aute culpa excepteur ea aliquip ad elit minim. Excepteur
        incididunt irure dolor excepteur. Cupidatat qui qui esse excepteur
        adipisicing officia. Officia ad magna mollit sunt amet magna commodo.
        Velit minim cupidatat non et cillum et in occaecat sunt nisi. Eiusmod
        dolore id eiusmod esse fugiat. Elit aute reprehenderit mollit fugiat
        fugiat occaecat deserunt fugiat voluptate aliqua Lorem adipisicing do.
        Elit dolor occaecat reprehenderit tempor et occaecat adipisicing et
        nulla do pariatur adipisicing. Proident quis sit in officia cupidatat ut
        deserunt qui enim sit. Consequat Lorem enim adipisicing nulla est
        voluptate cillum magna do voluptate excepteur eiusmod quis. Amet dolor
        anim do exercitation tempor pariatur ea est velit id nisi. Aute
        consectetur dolore et quis officia dolore ipsum dolore labore occaecat
        sunt ipsum. Et velit ipsum proident amet laborum irure eu id.
        {description}
      </p>
      <img className='proj-img' src={images} alt='missing' />
    </div>
  </li>
);

export default Project;
