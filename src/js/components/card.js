import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Cards extends React.Component {
  render() {
  return (
    <div>
      <Card className='rounded-0 border-0 mb-3'>
        <CardImg top width="100%" src={this.props.src} alt="Card image cap" />
        <CardBody className='bg-black'>
          <CardTitle className='size--regular red-cord'>{this.props.title}</CardTitle>
          <CardSubtitle className='size--small cut'>{this.props.subtitle}</CardSubtitle>
          <CardText>{this.props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
}


