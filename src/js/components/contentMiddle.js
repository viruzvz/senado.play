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
					<Col className='cut'><Cards src='https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
					<Col className='cut'><Cards src='https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
					<Col className='cut'><Cards src='https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
				</Row>
				<Row className='mb-3'>
					<Col className='cut'><Cards></Cards></Col>
					<Col className='cut'><Cards></Cards></Col>
					<Col className='cut'><Cards></Cards></Col>
				</Row>
		        <Row className='mb-3 pt-3 text-center'>
					<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
		        </Row>

		        <Row className='mb-3'>
		        	<Col md='12 mb-3'><h2 className='size--regular white border-bottom '>MENU BODY</h2></Col>
					<Col className='cut'><Cards></Cards></Col>
					<Col className='cut'><Cards></Cards></Col>
					<Col className='cut'><Cards></Cards></Col>
		        </Row>
				<Row className='mb-3'>
					<Col className='cut'><Cards></Cards></Col>
					<Col className='cut'><Cards></Cards></Col>
					<Col className='cut'><Cards></Cards></Col>
				</Row>
		        <Row className='mb-3 pt-3 text-center'>
					<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
		        </Row>
			</Container>
		</div>
    );
  }
}
