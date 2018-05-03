import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Timer from './timer.js';
import Record from './record.js';
import { Link } from 'react-router-dom';

export default class Cards extends React.Component {
  render() {
  return (
      <Card className='rounded-0 border-0 bg-black' >
        {this.props.singleimg ?
        <CardImg top width="100%" src={this.props.src} alt="Card " />
        :
        null
        }

        {this.props.tripleimg ?
        <div className='d-flex flex-row'>
          <Link to={this.props.href} className={`cardimg-triple card-overley ${ this.props.styleClass }`}><CardImg className='cardimg-triple' src={this.props.src} alt="Card " /><span className='cardimg-title white size--regular text-center shadow bg-gradient'>{this.props.name}</span></Link>
          <Link to={this.props.href1} className={`cardimg-triple card-overley ${ this.props.styleClass1 }`}><CardImg className='cardimg-triple' src={this.props.src1} alt="Card " /><span className='cardimg-title white size--regular text-center shadow bg-gradient'>{this.props.name1}</span></Link>
          <Link to={this.props.href2} className={`cardimg-triple card-overley ${ this.props.styleClass2 }`}><CardImg className='cardimg-triple' src={this.props.src2} alt="Card " /><span className='cardimg-title white size--regular text-center shadow bg-gradient'>{this.props.name2}</span></Link>
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
        <Record className='record p-3 shadow white' text='AO VIVO'></Record>
        :
        null
        }

        {this.props.hovertop ?
        <div className='hoverplay top'>
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-1x cut size--large ml-1"></i>
            <i className="fa fa-play-circle fa-stack-1x gray-dark size--xlarge"></i>
          </span>
        </div>
        :
        null
        }

        {this.props.hovermiddle ?
        <div className='hoverplay middle'>
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-1x cut size--large ml-1"></i>
            <i className="fa fa-play-circle fa-stack-1x gray-dark size--xlarge"></i>
          </span>
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


