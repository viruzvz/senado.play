import React from 'react';
import { render } from 'react-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import Navi from '../nav.js';
import Divider from '../divider.js';
import SocialNetwork from '../socialnetwork.js';

export default class Footer extends React.Component {
  render() {
    return (
    	<div>
    	<Divider className='p-2 bg-gray-fox'></Divider>
		<div className='bg-black py-3'>
			<Container>
				<Row className='mb-3'>
					<Navi classUl='nav' classLi='nav-item mr-2 size--regular text-uppercase font-weight-bold' classA='nav-link link--cut'></Navi>
					<Col className='text-right'><SocialNetwork></SocialNetwork></Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Entrevistas</dt>
							<dd className='cut size--small'>Salão Nobre</dd>
							<dd className='cut size--small'>Argumento</dd>
							<dd className='cut size--small'>Agenda Econômica</dd>
							<dd className='cut size--small'>Cidadania</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Notícias</dt>
							<dd className='cut size--small'>Senado Agora</dd>
							<dd className='cut size--small'>Em Alta</dd>
							<dd className='cut size--small'>Destaques da Semana</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Temáticos</dt>
							<dd className='cut size--small'>EcoSenado</dd>
							<dd className='cut size--small'>Em Discussão</dd>
							<dd className='cut size--small'>Alâ Senado</dd>
							<dd className='cut size--small'>Parlamento Brasil</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Documentários</dt>
							<dd className='cut size--small'>Senadoc</dd>
							<dd className='cut size--small'>Minidocs</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Séries</dt>
							<dd className='cut size--small'>Histórias</dd>
							<dd className='cut size--small'>Arquivo Aberto</dd>
							<dd className='cut size--small'>Grandes Personagens</dd>
              <dd className='cut size--small'>Histórias Contadas</dd>
              <dd className='cut size--small'>Senado na História</dd>
              <dd className='cut size--small'>Arquivo S</dd>
              <dd className='cut size--small'>Histórias do Brasil</dd>
							<dd className='cut size--small'>Orçamento Fácil</dd>
						</dl>
					</Col>
          <Col>
            <dl>
              <dt className='blue-play mb-3 size--regular'>Serviço e Informação</dt>
              <dd className='cut size--small'>Body Menu</dd>
              <dd className='cut size--small'>Body Menu</dd>
              <dd className='cut size--small'>Body Menu</dd>
              <dd className='cut size--small'>Body Menu</dd>
            </dl>
          </Col>
				</Row>
			</Container>
		</div>
		<div className='bg-negative p-2 cut text-center size--small'><span>Senado Federal - Praça dos Três Poderes - Brasília DF - CEP 70165-900 | Telefone: 0800 61 22 11</span></div>
		</div>
    );
  }
}
