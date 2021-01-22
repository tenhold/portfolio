import React from 'react';
import { NavLink } from 'react-router-dom';
import { heroImgs } from '../../data/projectData';
import Logo from '../svgs/Logo';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className='slash' id='slash-1'></div>
      <div className='slash' id='slash-2'></div>
      <div className='home-container'>
        <div className='me'>
          <Logo className='logo-home' />
        </div>
        <div className='about'>
          <h4>JavaScript | TypeScript | Node.js</h4>
          <h3>Software Developer</h3>
        </div>
      </div>
      <div className='feat-projects'>
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
