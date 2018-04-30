import React from 'react';
import ContentMiddle from '../contentMiddle.js';
import Divider from '../divider.js';
import CarouselPlay from '../carousel.js';
const Programas = () => (
        <div>
            <CarouselPlay></CarouselPlay>
            <Divider className='divider bg-blue-play'></Divider>
            <ContentMiddle carddefault></ContentMiddle>
        </div>
);

export default Programas;
