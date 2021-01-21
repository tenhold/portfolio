import React from 'react';
import { NavLink } from 'react-router-dom';
import { heroImgs } from '../../data/projectData';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='me'>
          <h1>Tempor ullamco</h1>
        </div>
        <div className='about'>
          <p>
            Voluptate pariatur ad occaecat sunt deserunt elit nulla mollit ad
            dolor eiusmod aliqua aliquip proident.
          </p>
        </div>
      </div>
      <div className='feat-projects'>
        {/* {nums.map((num: number, i: number) => (
          <div
            key={i}
            className='feat-project'>{`hello I'm number ${num}`}</div>
        ))} */}
        {heroImgs.map(({ id, src }) => (
          <div className='feat-project'>
            <NavLink to='/projects'>
              <img className='prost' src={src} alt={`prost${id}`} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
