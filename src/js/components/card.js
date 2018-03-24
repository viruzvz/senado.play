import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import BtnPlay from './btnplay.js';
import Timer from './timer.js';

export default class Cards extends React.Component {
  render() {
  return (
      <Card className='rounded-0 border-0 card-overley bg-black'>
        <CardImg top width="100%" src={this.props.src} alt="Card image cap" />
        
        {this.props.timer ?
        <Timer className='timer bg-black px-2 white' text='2:32'></Timer>
        :
        null
        }

        {this.props.top ?
        <div className='top bg-cut'>
          <BtnPlay className='fas fa-play-circle size--large gray-dark'></BtnPlay>
        </div>
        :
        null
        }

        {this.props.middle ?
        <div className='middle bg-cut'>
          <BtnPlay className='fas fa-play-circle size--large gray-dark'></BtnPlay>
        </div>
        :
        null
        }

        {this.props.cardbody ?
        <CardBody className='overley cut'>
          <CardTitle className='size--regular red-cord font-weight-bold'>{this.props.title}</CardTitle>
          <CardSubtitle className='size--small'>{this.props.subtitle}</CardSubtitle>
          <CardText>{this.props.text}</CardText>
        </CardBody>
        :
        null
        }

      </Card>
  );
}
}


