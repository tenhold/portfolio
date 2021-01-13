import React from 'react';
import { NavLink } from 'react-router-dom';
import { prostImgs } from '../../data/projectData';

console.log(prostImgs);

// const nums: number[] = [1, 2, 3, 4, 5, 6];

const Home: React.FC = () => {
  return (
    <div className='main'>
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
        {prostImgs.map(({ id, src }) => (
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
