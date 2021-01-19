import React, { PropsWithChildren, useState, useEffect } from 'react';

interface Props {
  images: string[];
}

const Carousel: Function = ({
  images,
}: PropsWithChildren<Props>): JSX.Element => {
  const [curImg, setCurImg] = useState(0);

  useEffect(() => {}, [curImg]);

  const next = () => {
    console.log('next');
    setCurImg(curImg === images.length - 1 ? 0 : curImg + 1);
  };

  const prev = () => {
    console.log('prev');
    setCurImg(curImg === 0 ? images.length - 1 : curImg - 1);
  };

  return (
    <div className='carousel'>
      <img src={images[curImg]} alt={`${images[curImg]}`} />
      {/* {images.map((image: string, i: number) => (
        <img src={image} alt={`${image}`} />
      ))} */}
      <button onClick={next}>next</button>
      <button onClick={prev}>previous</button>
    </div>
  );
};

// function Example(props: any) {
//   var items = [
//     {
//       name: 'Random Name #1',
//       description: 'Probably the most random thing you have ever seen!',
//     },
//     {
//       name: 'Random Name #2',
//       description: 'Hello World!',
//     },
//   ];

//   return (
//     <Carousel>
//       {items.map((item, i) => (
//         <Item key={i} item={item} />
//       ))}
//     </Carousel>
//   );
// }

// function Item(props: any) {
//   return (
//     <Paper>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.description}</p>

//       <Button className='CheckButton'>Check it out!</Button>
//     </Paper>
//   );
// }

export default Carousel;
