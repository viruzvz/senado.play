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
		$(document).on('scroll', this.navBarScroll.bind(this))
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

	navBarScroll(e) {
		var scrollTopDocument = $(document).scrollTop()
		var $links = $('.menuStick-link')
		console.log($links)

		

		// $.each($links, function (i, link) {
			
		// 	var $currentLink = $(link)
		// 	var $elemRef = $($currentLink.data('target'))
		// 	var scrollTopElemRef = $elemRef.position().top
		// 	var heightElemRef = $elemRef[0].offsetHeight

		// 	if(scrollTopDocument >= scrollTopElemRef && scrollTopDocument < scrollTopElemRef + heightElemRef) {
		// 		$links.removeClass('active')
		// 		$currentLink.addClass('active')
		// 	} else {
		// 		$links.removeClass('active')
		// 	}
		// })
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

				<Container >
						<Row className='mb-4' id="section1">
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=402' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=401' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria ti XVI,'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=400' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
						</Row>
						<Row className='mb-4'>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=403' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipogrizado desde o século XVI,'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=404' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simple de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=405' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
						</Row>

						<Row className='text-center'>
							<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
						</Row>
						
						<Row className='mb-4 text-left' >
							<Col><p className='border-bottom white m-0 pb-2'>BODY MENU</p></Col>
						</Row>

						<Row className='mb-4' id="section2">
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=406' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simpleem sendo utilizado desde o século XVI,'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=407' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de teutilizado desde o século XVI,'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=408' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da izado desde o século XVI,'></Cards></Col>
						</Row>
						<Row className='mb-4'>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=409' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=410' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográdesde o século XVI,'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/318/180?image=411' timer cardbody title='Meu Titulo' subtitle='Meu subtitle' text='Lorem Ipsumográfica e de impressos, e vem sendo utilizado desde o século XVI,'></Cards></Col>
						</Row>
						<Row className='text-center'>
							<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
						</Row>

						<Row className='mb-4 text-left' >
							<Col><p className='border-bottom white m-0 pb-2'>BODY MENU</p></Col>
						</Row>

						<Row className='mb-4' id="section3">
							<Col className='cut'><Cards src='https://unsplash.it/118/200?image=399'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/118/200?image=398'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/118/200?image=397'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/118/200?image=396'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/118/200?image=395'></Cards></Col>
							<Col className='cut'><Cards src='https://unsplash.it/118/200?image=393'></Cards></Col>
						</Row>

						<Row className='text-center'>
							<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
						</Row>

				</Container>
			</StickyContainer>
		</div>
    );
  }
}
