import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Record from './record.js';

export default class ContentFluid extends React.Component {
  render() {
    return (
	<Container fluid>
    <Container>
		<Row>
			<Col><Record></Record></Col>
		</Row>
    </Container>
	</Container>

    );
  }
}
