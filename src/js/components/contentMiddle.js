import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavSec from './nav.js';
import Cards from './card.js';
import { StickyContainer, Sticky } from 'react-sticky';
import ScrollableAnchor from 'react-scrollable-anchor';
import $ from 'jquery'

export default class ContentMiddle extends React.Component {
	constructor(props) {
		super(props)

		this.initEvents()
	}

	initEvents() {
		$(document.body).on('click', '.menuStick-link', this.navBarClick.bind(this))
		// $(document).on('scroll', this.navBarScroll.bind(this)) // TODO: Fazer o scroll para o menu fazer active nos itens
	}

	navBarClick(e) {
		e.preventDefault();
		var $currentTarget = $(e.currentTarget)
		var _this = this
		$(document).on('scroll')
		
		if ($currentTarget.hasClass('menuStick-link')) {
			$('.menuStick-link').removeClass('active')
			var $target = $($currentTarget.data('target'))
			
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				$currentTarget[0].classList.add('active')
				$(document).on('scroll', _this.navBarScroll.bind(_this))
			})
		}
	}

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

					<div id="section1"> 
						<Row className='mb-4'>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=402' record singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=401' record singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria ti XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=400' record singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></a></Col>
						</Row>
						<Row className='mb-4'>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=403' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipogrizado desde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=404' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simple de impressos, e vem sendo utilizado desde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=405' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></a></Col>
						</Row>
						<Row className='text-center'>
							<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
						</Row>
					</div>

					<div id="section2">
						<Row className='mb-4 text-left'>
							<Col><p className='border-bottom white m-0 pb-2'>BODY MENU</p></Col>
						</Row>
						<Row className='mb-4'>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=406' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simpleem sendo utilizado desde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=407' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de teutilizado desde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=408' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da izado desde o século XVI,'></Cards></a></Col>
						</Row>
						<Row className='mb-4'>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=409' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=410' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográdesde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=411' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsumográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></a></Col>
						</Row>
						<Row className='text-center'>
							<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
						</Row>
					</div>

					<div id="section3">
						<Row className='mb-4 text-left'>
							<Col><p className='border-bottom white m-0 pb-2'>BODY MENU</p></Col>
						</Row>
						<Row className='mb-4'>
							<Col className='cut'><a className='card-overley' href='#'><Cards hovermiddle singleimg src='https://unsplash.it/118/200?image=399'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards hovermiddle singleimg src='https://unsplash.it/118/200?image=398'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards hovermiddle singleimg src='https://unsplash.it/118/200?image=397'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards hovermiddle singleimg src='https://unsplash.it/118/200?image=396'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards hovermiddle singleimg src='https://unsplash.it/118/200?image=395'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards hovermiddle singleimg src='https://unsplash.it/118/200?image=393'></Cards></a></Col>
						</Row>
					</div>

					<div id="section4">
						<Row className='mb-4 text-left'>
							<Col><p className='border-bottom white m-0 pb-2'>BODY MENU</p></Col>
						</Row>
						<Row className='mb-4'>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=206' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simpleem sendo utilizado desde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=212' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de teutilizado desde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=208' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da izado desde o século XVI,'></Cards></a></Col>
						</Row>
						<Row className='mb-4'>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=209' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=210' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográdesde o século XVI,'></Cards></a></Col>
							<Col className='cut'><a className='card-overley' href='#'><Cards src='https://unsplash.it/318/180?image=211' timer singleimg cardbody hovertop title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsumográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></a></Col>
						</Row>
						<Row className='text-center'>
							<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
						</Row>
					</div>

					<div id="section5">
						<Row className='mb-4 text-left'>
							<Col><p className='border-bottom white m-0 pb-2'>BODY MENU</p></Col>
						</Row>
						<Row className='mb-4'>
							<Col className='cut'>
								<Cards src1='http://www.senado.gov.br/senadores/img/fotos-oficiais/senador612.jpg' name='Eunício Oliveira' src2='http://www.senado.gov.br/senadores/img/fotos-oficiais/senador3396.jpg' name1='Tasso Jereissati' src3='http://www.senado.gov.br/senadores/img/fotos-oficiais/senador615.jpg' name2='José Pimentel' href='#' href1='#' href2='#' tripleimg cardbody title='Meu Titulo' subtitle='Meu subtitle'></Cards>
							</Col>
							<Col className='cut'>
								<Cards src1='https://unsplash.it/318/180?image=704' src2='https://unsplash.it/318/180?image=705' src3='https://unsplash.it/318/180?image=806' href='#' href1='#' href2='#' tripleimg cardbody title='Meu Titulo' subtitle='Meu subtitle'></Cards>
							</Col>
							<Col className='cut'>
								<Cards src1='https://unsplash.it/318/180?image=807' src2='https://unsplash.it/318/180?image=808' src3='https://unsplash.it/318/180?image=809' href='#' href1='#' href2='#' tripleimg cardbody title='Meu Titulo' subtitle='Meu subtitle'></Cards>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
						</Row>
					</div>


			</Container>
			</StickyContainer>
		</div>
    );
  }
}
