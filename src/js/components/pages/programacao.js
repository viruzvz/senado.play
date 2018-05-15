import React from 'react';
import ContentMiddle from '../contentMiddle.js';
import Divider from '../divider.js';

import { Table, Container, Col, Row } from 'reactstrap';
const Programação = () => (
        <div className='bg-gray-dark'>
        	<Container className='py-3'>
        		<Row>
        			<Col>
			            <h1 className='shadow white size--large text-uppercase'>Programação</h1>
			            <p className='shadow white size--middle m-0 text-right'>Sintonize a TV SENADO</p>
					</Col>
				</Row>
			</Container>
            <Divider className='divider bg-blue-play'></Divider>
			<Container className='py-3'>
				<Row>
					<Col>
						<h2 className='size--small cut'>25 OUT 2018 <i className='fa fa-calendar'></i></h2>
						<Table dark hover responsive striped>
							<thead>
								<tr>
									<th>Horário</th>
									<th>Programa</th>
									<th>Sinopse</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">01h:00</th>
									<td>Senadoc - Eu, Estranho Personagem</td>
									<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</td>
								</tr>
								<tr>
									<th scope="row">02h:00</th>
									<td>Espaço Cultural - Mawaca</td>
									<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</td>
								</tr>
								<tr>
									<th scope="row">03h:00</th>
									<td>Conversa de Músico - Vila-Lobos - Quarteto</td>
									<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
        </div>
);

export default Programação;
