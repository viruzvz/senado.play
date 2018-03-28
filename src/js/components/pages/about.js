import React from 'react';
import LazyHero from 'react-lazy-hero';

const About = () => (
        <div>
            <LazyHero className='teste' imageSrc="https://unsplash.it/2000/1000?random" minHeight='70vh' parallaxOffset='100' isCentered={false} opacity={0.3}>
                <div className='bg-gradient'>
                    <div className='container'>
                        <h1 className='shadow white size--large'>Generic Startup Hype Headline</h1>
                        <p className='shadow white size--middle'>texto</p>
                    </div>
                </div>
            </LazyHero>

            {/* ... */}
        </div>
);

export default About;
