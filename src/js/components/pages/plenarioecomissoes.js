import React from 'react';
import Hero from '../hero.js';
import ContentMiddle from '../contentMiddle.js';
import Divider from '../divider.js';

const Plenario = () => (
        <div>
            <Hero headertitle='PLENÁRIO E COMISSÕES' text='text'></Hero>
            <Divider className='divider bg-blue-play'></Divider>
            <ContentMiddle></ContentMiddle>
        </div>
);

export default Plenario;
