import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '../../assets/background-programas/textura_agenda_00085.png',
    src2: '../../assets/reporters/senado-noticias.png',
    altText: 'Senado Notícias',
    caption: 'NOTÍCIAS',
    header: 'SENADO'
  },
  {
    src: '../../assets/background-programas/textura_agumento_00219.png',
    src2: '../../assets/reporters/argumento.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: '../../assets/background-programas/textura Assunto_03081.png',
    src2: '../../assets/reporters/assunto-de-estado.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

class CarouselPlay extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className='img-size-src' src={item.src} alt={item.altText} />
          <img className='img-absolute img-size-src2 img-fluid' src={item.src2} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });

    return (
      <div className='u-Relative'>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          className='carousel-play'
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <div className='flutuante'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h1 className='shadow white size--large'>PROGRAMAS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default CarouselPlay;