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
    description: `Trailr provides users access to hiking trails in their area, as well as search-by-location functionality. Trails load automatically as a user traverses to new areas within Google Maps.
    Users can save their favorite trails to plan trips, and rate the difficulty and likeability of each trail that they encounter. Users can also upload geo-tagged photos, sharing interesting things they find along the trail route with other users. Users can comment on their own photos and photos that others upload, and they can edit their own comments.`,
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
