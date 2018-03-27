import React from 'react';
import { render } from 'react-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import Navi from '../nav.js';
import Divider from '../divider.js';

export default class Footer extends React.Component {
  render() {
    return (
    	<div>
    	<Divider className='p-2 bg-gray-fox'></Divider>
		<div className='bg-black py-3'>
			<Container>
				<Row className='mb-3'>
					<Navi classUl='nav' classLi='nav-item mr-2 size--regular text-uppercase font-weight-bold' classA='nav-link link--cut'></Navi>
				</Row>
				<Row className='mb-3'>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Body Menu</dt>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Body Menu</dt>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Body Menu</dt>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Body Menu</dt>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3 size--regular'>Body Menu</dt>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
						</dl>
					</Col>
				</Row>
			</Container>
		</div>
		<div className='bg-negative p-2 cut text-center size--small'><span>Body</span></div>
		</div>
    );
  }
}
