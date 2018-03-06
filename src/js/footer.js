import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavSec from './nav.js';

export default class Footer extends React.Component {
  render() {
    return (
    	<div>
    	<div className='p-2 bg-gray-fox'></div>
		<div className='bg-black py-3'>
			<Container>
				<Row>
					<Col>
						<dl>
							<dt className='blue-play mb-3'>Body Menu</dt>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3'>Body Menu</dt>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3'>Body Menu</dt>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3'>Body Menu</dt>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
							<dd className='cut size--small'>Body Menu</dd>
						</dl>
					</Col>
					<Col>
						<dl>
							<dt className='blue-play mb-3'>Body Menu</dt>
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
