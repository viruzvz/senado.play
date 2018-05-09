import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

export default class Hero extends React.Component {
  render() {
    return (
	    <LazyHero imageSrc="https://unsplash.it/2000/1300?random" minHeight='60vh' parallaxOffset={100} isCentered={false} opacity={0.3}>
	        <div className='bg-gradient'>
	            <div className='container'>
	                <h1 className='shadow white size--large'>{this.props.headertitle}</h1>
	                <p className='shadow white size--middle'>{this.props.text}</p>
	            </div>
	        </div>
	    </LazyHero>
    );
  }
}
