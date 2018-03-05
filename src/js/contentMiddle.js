import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavSec from './nav.js';

export default class ContentMiddle extends React.Component {
  render() {
    return (
		<div className='bg-gray-basic'>
			<Container>
				<Row>
					<NavSec></NavSec>
				</Row>
				<Row>
					<Col className='white'>Card</Col>
					<Col className='white'>Card</Col>
					<Col className='white'>Card</Col>
				</Row>
			</Container>
		</div>
    );
  }
}