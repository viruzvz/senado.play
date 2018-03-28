import React from 'react';
import Hero from '../hero.js';
import ContentMiddle from '../contentMiddle.js';
import Divider from '../divider.js';

const Senadores = () => (
        <div>
            <Hero headertitle='SENADORES' text='text'></Hero>
            <Divider className='divider bg-blue-play'></Divider>
            <ContentMiddle cardtriple></ContentMiddle>
        </div>
);

export default Senadores;
