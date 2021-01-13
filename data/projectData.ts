import prostImg from '../images/prost.png';
import prostImg0 from '../images/projects/Prost/IMG_3150.png';
import prostImg1 from '../images/projects/Prost/IMG_3151.png';
import prostImg2 from '../images/projects/Prost/IMG_3152.png';
import trailrImg2 from '../images/projects/Trailr/trailr-2.png';

interface image {
  id: number;
  src: string;
}

export const projects = [
  {
    name: 'Prost',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    images: prostImg,
  },
  {
    name: 'Trailr',
    description: `Lorem ipsum trair sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`,
    images: trailrImg2,
  },
];

export const prostImgs: image[] = [
  { id: 3150, src: prostImg0 },
  { id: 3151, src: prostImg1 },
  { id: 3152, src: prostImg2 },
];
