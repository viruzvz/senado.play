import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavSec from './nav.js';
import Cards from './card.js';

export default class ContentMiddle extends React.Component {
  render() {
    return (
		<div className='bg-gray-dark py-3'>
			<Container>
				<Row>
					<NavSec></NavSec>
				</Row>
				<Row className='mb-3'>
					<Col className='white'><Cards></Cards></Col>
					<Col className='white'><Cards></Cards></Col>
					<Col className='white'><Cards></Cards></Col>
				</Row>
        <Row className='mb-3 text-center'>
          <Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
        </Row>
        <Row className='mb-3'>
          <Col className='white'><Cards></Cards></Col>
          <Col className='white'><Cards></Cards></Col>
          <Col className='white'><Cards></Cards></Col>
        </Row>
			</Container>
		</div>
    );
  }
}
