import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavSec from './nav.js';
import Cards from './card.js';
import { StickyContainer, Sticky } from 'react-sticky';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class ContentMiddle extends React.Component {
  render() {
    return (
		<div className='bg-gray-dark'>
			<StickyContainer>
				<Sticky>
		          {
		            ({
		              style,
		              isSticky,
		              wasSticky,
		              distanceFromTop,
		              distanceFromBottom,
		              calculatedHeight
		            }) => {
		              return (
		              	<header className='bg-gray-dark py-3 zindex-fixed' style={style}>
		              	<Container>
		              		<Row>
		                	<NavSec></NavSec>
		                	</Row>
		                </Container>
		                </header>
		              )
		            }
		          }
				</Sticky>
			<Container>
				<ScrollableAnchor id={'section1'}>
					<div>
					<Row className='mb-4'>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=402' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=401' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria ti XVI,'></Cards></Col>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=400' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
					</Row>
					<Row className='mb-4'>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=403' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipogrizado desde o século XVI,'></Cards></Col>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=404' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simple de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=405' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
					</Row>
			        <Row className='text-center'>
						<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
			        </Row>
			        </div>
		        </ScrollableAnchor>

		        <ScrollableAnchor id={'section2'}>
		        	<div>
			        <Row className='mb-4 text-left'>
						<Col><p className='border-bottom white m-0 pb-2'>BODY MENU</p></Col>
			        </Row>
					<Row className='mb-4'>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=406' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simpleem sendo utilizado desde o século XVI,'></Cards></Col>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=407' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de teutilizado desde o século XVI,'></Cards></Col>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=408' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da izado desde o século XVI,'></Cards></Col>
					</Row>
					<Row className='mb-4'>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=409' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=410' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográdesde o século XVI,'></Cards></Col>
						<Col className='cut'><Cards src='https://unsplash.it/318/180?image=411' title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsumográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
					</Row>
			        <Row className='text-center'>
						<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
			        </Row>
			        </div>
		        </ScrollableAnchor>

		        <ScrollableAnchor id={'section3'}>
		        	<div>
			        <Row className='mb-4 text-left'>
						<Col><p className='border-bottom white m-0 pb-2'>BODY MENU</p></Col>
			        </Row>
					<Row className='mb-4'>
						<Col className='cut'>aa</Col>
						<Col className='cut'>bb</Col>
						<Col className='cut'>cc</Col>
						<Col className='cut'>dd</Col>
						<Col className='cut'>ee</Col>
						<Col className='cut'>ff</Col>
					</Row>
			        <Row className='text-center'>
						<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
			        </Row>
			        </div>
		        </ScrollableAnchor>

			</Container>
			</StickyContainer>
		</div>
    );
  }
}
