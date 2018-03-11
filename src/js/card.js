import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Cards extends React.Component {
  render() {
  return (
    <div>
      <Card className='rounded-0 border-0 mb-3'>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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


