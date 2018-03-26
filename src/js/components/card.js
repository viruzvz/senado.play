import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import BtnPlay from './btnplay.js';
import Timer from './timer.js';
import Record from './record.js';

export default class Cards extends React.Component {
  render() {
  return (
      <Card className='rounded-0 border-0 bg-black'>
        {this.props.singleimg ?
        <CardImg top width="100%" src={this.props.src} alt="Card " />
        :
        null
        }

        {this.props.tripleimg ?
        <div className='d-flex flex-row'>
          <a href={this.props.href} className='cardimg-triple card-overley'><CardImg className='cardimg-triple' src={this.props.src1} alt="Card " /><span className='cardimg-title white size--regular text-center text-shadow bg-caption-gradient'>{this.props.name}</span></a>
          <a href={this.props.href1} className='cardimg-triple card-overley'><CardImg className='cardimg-triple' src={this.props.src2} alt="Card " /><span className='cardimg-title white size--regular text-center text-shadow bg-caption-gradient'>{this.props.name1}</span></a>
          <a href={this.props.href2} className='cardimg-triple card-overley'><CardImg className='cardimg-triple' src={this.props.src3} alt="Card " /><span className='cardimg-title white size--regular text-center text-shadow bg-caption-gradient'>{this.props.name2}</span></a>
        </div>
        :
        null
        }

        {this.props.timer ?
        <Timer className='timer bg-black px-2 white' text='2:32'></Timer>
        :
        null
        }

        {this.props.record ?
        <Record className='record p-3 text-shadow white' text='AO VIVO'></Record>
        :
        null
        }

        {this.props.hovertop ?
        <div className='hoverplay top bg-cut'>
          <BtnPlay className='fas fa-play-circle size--large gray-dark'></BtnPlay>
        </div>
        :
        null
        }

        {this.props.hovermiddle ?
        <div className='hoverplay middle bg-cut'>
          <BtnPlay className='fas fa-play-circle size--large gray-dark'></BtnPlay>
        </div>
        :
        null
        }

        {this.props.cardbody ?
        <CardBody className='hover cut p-3'>
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


