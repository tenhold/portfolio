import prostMock from '../images/projects/Prost/Prost_mock.png';
import prostHome from '../images/projects/Prost/Prost_home.png';
import prostMap from '../images/projects/Prost/Prost_map.png';
import prostMessage from '../images/projects/Prost/Prost_message.png';
import trailrMockMac from '../images/projects/Trailr/trailr_macbook_mock.png';
import trailr1 from '../images/projects/Trailr/trailr_home.png';
import trailr2 from '../images/projects/Trailr/trailr_stargazer.png';
import trailr3 from '../images/projects/Trailr/trailr_travellog.png';
import myVoteMocMac from '../images/projects/MyVote/myvote_macbook_mock.png';

interface projectsOS {
  name: string;
  description: string;
  images: string[];
  technologies: string[];
  repo: string;
}

interface image {
  id: number;
  name: string;
  src: string;
}

export const projects: projectsOS[] = [
  {
    name: 'Prost',
    description:
      'Prost aims to create safe drinking environments to promote both relaxing with friends and those who are yet to be called friends all while having a delicious drink. Users can go solo or create parties and place themselves on our map to be seen by the public or only their friends. Privacy is a big concern here and users have complete control over who they share their location with. Users can create a friends list, plan events through private messages, check their area for new spots to frequent or curate a list of their favorite watering holes, view the varying status of any of the participating bars and restaurants including population, indoor / outdoor, masks or no masks, etc. On the other hand, if you are a business owner, register with us and experience a new, fluid method of communication with your customers. Alert them to promotions, popup events, crowd numbers, and keep them up to date about the going-ons in your business.',
    images: [prostMock, prostHome, prostMap, prostMessage],
    technologies: [
      'react',
      'react-router',
      'node.js',
      'express',
      'socket.io',
      'goolge maps API',
      'Material UI',
      'PostgreSql',
      'Google Maps',
      'Google Translate',
      'Webpack',
    ],
    repo: 'https://github.com/tenhold/Prost',
  },
  {
    name: 'Trailr',
    description: `Trailr provides users access to hiking trails in their area, as well as search-by-location functionality. Trails load automatically as a user traverses to new areas within Google Maps.
    Users can save their favorite trails to plan trips, and rate the difficulty and likeability of each trail that they encounter. Users can also upload geo-tagged photos, sharing interesting things they find along the trail route with other users. Users can comment on their own photos and photos that others upload, and they can edit their own comments.`,
    images: [trailrMockMac, trailr1, trailr2, trailr3],
    technologies: [
      'react',
      'react-router',
      'node.js',
      'express',
      'MySQL',
      'Bootstrap',
      'goolge maps API',
      'Babel',
    ],
    repo: 'https://github.com/tenhold/trailr',
  },
  {
    name: 'MyVote',
    description: '',
    images: [myVoteMocMac],
    technologies: [
      'react',
      'react-router',
      'node.js',
      'express',
      'MongoDB',
      'Bootstrap',
    ],
    repo: 'https://github.com/tenhold/myvote',
  },
];

export const heroImgs: image[] = [
  { id: 3150, name: 'Prost', src: prostMock },
  { id: 3151, name: 'Trailr', src: trailrMockMac },
  { id: 3152, name: 'MyVote', src: myVoteMocMac },
];
