import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ContentMiddle extends React.Component {
  render() {
    return (
		<div className='bg-gray-basic'>
			<Container>
				<Row>
					<Col className='white'>a</Col>
					<Col className='white'>b</Col>
					<Col className='white'>c</Col>
				</Row>
			</Container>
		</div>
    );
  }
}