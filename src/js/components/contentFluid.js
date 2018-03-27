import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Record from './record.js';
import Share from './share.js';
import VideoEmbed from './videoEmbed.js';

export default class ContentFluid extends React.Component {
  render() {
    return (
    	<div className='bg-gray-fox pt-3'>
        <Container>
      		<Row className='pb-3'>
      			<Col><Record className='bg-gray-dark record px-2 py-1 white' text='AO VIVO'></Record></Col>
            <Col className='text-right'><Share></Share></Col>
      		</Row>
          <Row>
            <Col className='mb-3'><VideoEmbed></VideoEmbed></Col>
          </Row>
        </Container>
    	</div>
    );
  }
}
