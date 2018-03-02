import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ContentFluid extends React.Component {
  render() {
    return (
	<Container fluid>
		<Row>
			<Col>teste</Col>
		</Row>
	</Container>
      
    );
  }
}