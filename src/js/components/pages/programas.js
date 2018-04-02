import React from 'react';
import ContentMiddle from '../contentMiddle.js';
import Divider from '../divider.js';
import Carousel from '../carousel.js';
const Programas = () => (
        <div>
            <Carousel></Carousel>
            <Divider className='divider bg-blue-play'></Divider>
            <ContentMiddle carddefault></ContentMiddle>
        </div>
);

export default Programas;
