import React from 'react';
import ContentFluid from '../contentFluid.js';
import ContentMiddle from '../contentMiddle.js';
import Divider from '../divider.js';

const Home = () => (
	<div>
		<ContentFluid></ContentFluid>
		<Divider className='divider bg-blue-play'></Divider>
		<ContentMiddle></ContentMiddle>
	</div>
);

export default Home;