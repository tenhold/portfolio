import React from 'react';

interface Props {
  className: string;
  onClick: () => void;
}

const Hamburger: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'>
      <path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z' />
    </svg>
  );
};

export default Hamburger;
