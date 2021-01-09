import React from 'react';

const nums: number[] = [1, 2, 3, 4, 5, 6];

const Home: React.FC = () => {
  return (
    <div>
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
        {nums.map((num: number, i: number) => (
          <div className='feat-project'>{`hello I'm number ${num}`}</div>
        ))}
      </div>
    </div>
  );
};
export default Home;
