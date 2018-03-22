import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import BtnPlay from './btnplay.js';
import Timer from './timer.js';

export default class Cards extends React.Component {
  render() {
  return (
      <Card className='rounded-0 border-0 mb-3 cardOverley bg-black'>
        <CardImg top width="100%" src={this.props.src} alt="Card image cap" />
        <Timer className='timer bg-black px-2 white' text='2:32'></Timer>
        <div className='cardMiddle cardCircle bg-cut'>
          <BtnPlay className='fas fa-play-circle size--large gray-dark'></BtnPlay>
        </div>
        <CardBody className='cardBody cut'>
          <CardTitle className='size--regular red-cord font-weight-bold'>{this.props.title}</CardTitle>
          <CardSubtitle className='size--small'>{this.props.subtitle}</CardSubtitle>
          <CardText>{this.props.text}</CardText>
        </CardBody>
      </Card>
  );
}
}

