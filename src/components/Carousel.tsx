import React, { PropsWithChildren, useState } from 'react';
import NextBtn from '../svgs/NextBtn';
import PrevBtn from '../svgs/PrevBtn';

interface Props {
  images: string[];
}

const Carousel: Function = ({
  images,
}: PropsWithChildren<Props>): JSX.Element => {
  const [curImg, setCurImg] = useState(0);

  const next = () => setCurImg(curImg === images.length - 1 ? 0 : curImg + 1);

  const prev = () => setCurImg(curImg === 0 ? images.length - 1 : curImg - 1);

  return (
    <div className='carousel'>
      <PrevBtn className='prev' id='arrows' onClick={prev} />
      <NextBtn className='next' id='arrows' onClick={next} />
      <img src={images[curImg]} alt={`${images[curImg]}`} />
    </div>
  );
};

export default Carousel;
