import React from 'react';
import NavbarPlay from './navbarPlay.js';
import {Container, Row, Col,} from 'reactstrap';

const Navigation = () => (

<div className='bg-black'>
	<Container>
		<Row>
			<Col>
				<NavbarPlay></NavbarPlay>
			</Col>
		</Row>
	</Container>
</div>
);

export default Navigation;