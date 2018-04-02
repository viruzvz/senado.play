import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://picsum.photos/1400/500/?random',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://picsum.photos/1400/500/?image=167',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://picsum.photos/1400/500/?image=345',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
