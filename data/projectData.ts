import prostMock from '../images/projects/Prost/Prost_mock.png';
import prostImg from '../images/prost.png';
import prostImg0 from '../images/projects/Prost/IMG_3150.png';
import prostImg1 from '../images/projects/Prost/IMG_3151.png';
import prostImg2 from '../images/projects/Prost/IMG_3152.png';
import trailrMockMac from '../images/projects/Trailr/trailr_macbook_mock.png';
import trailrImg2 from '../images/projects/Trailr/trailr-2.png';

interface projectsOS {
  name: string;
  description: string;
  images: string; // will be an array
  technologies: string[];
  repo: string;
}

interface image {
  id: number;
  src: string;
}

export const projects: projectsOS[] = [
  {
    name: 'Prost',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    images: prostMock,
    technologies: [
      'react',
      'react-router',
      'node.js',
      'goolge maps API',
      'Material UI',
    ],
    repo: 'https://github.com/tenhold/Prost',
  },
  {
    name: 'Trailr',
    description: `Lorem ipsum trair sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`,
    images: trailrMockMac,
    technologies: ['react', 'react-router', 'node.js', 'goolge maps API'],
    repo: 'https://github.com/tenhold/trailr',
  },
];

export const prostImgs: image[] = [
  { id: 3150, src: prostMock },
  { id: 3151, src: prostImg1 },
  { id: 3152, src: prostImg2 },
];
