import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { heroImgs } from '../../data/projectData';
import Logo from '../svgs/Logo';

const Home: React.FC = () => {
  return (
    <div id='bg'>
      <div className='home'>
        <div className='slash' id='slash-1'></div>
        <div className='slash' id='slash-2'></div>
        <div className='home-container'>
          <div className='me'>
            <Logo className='logo-home' />
          </div>
          <div className='about'>
            <h3>Jon Tenholder</h3>
            <h4>Software Developer</h4>
          </div>
        </div>
        <div className='feat-projects'>
          {heroImgs.map(({ id, name, src }) => (
            <div className='feat-project' key={id}>
              <HashLink to={`/projects#${name}`}>
                <img className='prost' src={src} alt={`prost${id}`} />
              </HashLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
