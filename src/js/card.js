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
          <CardTitle className='size--regular red-cord'>Card title</CardTitle>
          <CardSubtitle className='size--small cut'>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

        </CardBody>
      </Card>
    </div>
  );
}
}


