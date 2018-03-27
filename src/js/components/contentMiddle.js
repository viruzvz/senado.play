import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavSec from './nav.js';
import Cards from './card.js';
import { StickyContainer, Sticky } from 'react-sticky';
import ScrollableAnchor from 'react-scrollable-anchor';

import $ from 'jquery'
import dados from '../../fixtures/dados-pagina-principal.json'
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class ContentMiddle extends React.Component {
	constructor(props) {
		super(props)
		this.datas = dados

		this.state = {dados: this.datas, containers: this.datas[0].capa.containers}
	}

  render() {
    return (
		<div className='bg-gray-dark'>
			<header className='bg-gray-dark py-3 zindex-fixed menuStick'>
				<NavSecPlay datas={this.state.containers}/>
			</header>	
			<Container>
					<ContainerPlay cards={this.state.containers[0].cards} id={this.state.containers[0].id} />
					<ContainerPlay cards={this.state.containers[1].cards} id={this.state.containers[1].id} title={this.state.containers[1].title}/>
					<ContainerPlay cols="6" cards={this.state.containers[2].cards} id={this.state.containers[2].id} title={this.state.containers[2].title}/>
					<ContainerPlay cards={this.state.containers[3].cards} id={this.state.containers[3].id} title={this.state.containers[3].title}/>

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
		</div>
    );
  }
}

class ContainerPlay extends React.Component {
	constructor(props) {
		super(props)

		this.state = {rows:[], newRow:undefined}
		this.id = props.id
		this.title = props.title
		this.cols = props.cols ? props.cols : 3
		
		this.rows = this.formatDatasFromProps(props.cards)		
	}

	formatDatasFromProps(cards) {
		var row = []
		var rows = []
		var _this = this
		var cols = this.cols

		$.each(cards, function (i, el) {
			if(i == 0 || i % cols != 0) {
				row.push(el)
			} else {
				rows.push(row)
				row = []
				row.push(el)
			}
		})
		rows.push(row)
		return rows
	}

	render () {
		var _this = this
		var rows = _this.rows
		var cols = this.cols
		var _sm = Math.floor(12 / cols)
		return <div id={this.id}> 
			{this.title ? <Row className='mb-4 text-left zzz'>
											<Col><p className='border-bottom white m-0 pb-2'>{this.title.toUpperCase()}</p></Col>
										</Row> 
									: null }
			{rows.map(function (row, i) {
				return <Row className='mb-4'  key={Math.random()}>
					
					{row.map(function (colCard, i) {
						if (colCard.type == 'tripleimg') {
							return <Col className='cut'>
										 		<Cards src1='http://www.senado.gov.br/senadores/img/fotos-oficiais/senador612.jpg' name='Eunício Oliveira' src2='http://www.senado.gov.br/senadores/img/fotos-oficiais/senador3396.jpg' name1='Tasso Jereissati' src3='http://www.senado.gov.br/senadores/img/fotos-oficiais/senador615.jpg' name2='José Pimentel' href='#' href1='#' href2='#' tripleimg cardbody title='Meu Titulo' subtitle='Meu subtitle'></Cards>
										 </Col>
						} else {
							return <Col xs="12" sm={_sm} className='cut' key={Math.random()}><a className='card-overley' href={colCard.src}><Cards src={colCard.src} timer={colCard.timer} record={colCard.record} singleimg={colCard.singleimg} cardbody={colCard.cardbody} hovertop={colCard.hovertop} hovermiddle={colCard.hovermiddle} title={colCard.title} subtitle={colCard.subtitle} text={colCard.text}></Cards></a></Col>
						}
					})}
				</Row>
			})}
		<Row className='text-center'>
			<Col><Button outline color="secondary">Ver Mais</Button>{' '}</Col>
		</Row>
	</div>
	}
}

class NavSecPlay extends React.Component {
	constructor(props) {
		super(props)

		this.state = {datas: props.datas, active:undefined}

		this.initEvents()
	}

	componentDidMount () {
		this.sticker = $('.menuStick')[0]
		this.offsetTop = this.sticker.offsetTop
	}

	initEvents() {
		$(document.body).on('click', '.menuStick-link', this.navBarClick.bind(this))
		$(window).on('scroll', this.navBarScroll.bind(this)) // TODO: Fazer o scroll para o menu fazer active nos itens
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
				// $(document).on('scroll', _this.navBarScroll.bind(_this))
				_this.state.active = $currentTarget.data('target')
			})
		}
	}

	navBarScroll(e) {
		var sticker = this.sticker
		var nextSibling = sticker.nextSibling
		var nextSiblingPaddingTop = window.getComputedStyle(nextSibling, null).paddingTop
		var stickerHeight = sticker.offsetHeight

		if(window.pageYOffset >= this.offsetTop) {
			sticker.classList.add('sticky')
			nextSibling.style.setProperty('padding-top', this.sumStyleValues(nextSiblingPaddingTop, stickerHeight)+'px')
		} else {
			this.sticker.classList.remove('sticky')
			// nextSibling.style.setProperty('padding-top', undefined)
		}


	}

	sumStyleValues(val1, val2) {
		val1 = val1 ? val1 : 0
		val2 = val2 ? val2 : 0

		val1 = typeof val1 != "number" ? val1.match(/\d*/)[0] : val1
		val2 = typeof val2 != "number" ? val2.match(/\d*/)[0] : val2

		return val1+val2
	}

	render() {
		var datas = this.state.datas
		var _this = this
		return <Container>
							<Row>
								<Nav>
								{this.state.datas.map(function (el, i){
									return <NavItem key={Math.random()} data-target={"#"+el.id} className="menuStick-link" active={"#"+el.id == _this.state.active ? true : false}>
														<NavLink className='text-uppercase font-weight-bold size--regular link--white' href={"#"+el.id}>{el.title}</NavLink>
												</NavItem>
								})}
								</Nav>
							</Row>
				</Container>
	}
}