import React from 'react';
import ContentVideo from '../contentVideo.js';
import ContentMiddle from '../contentMiddle.js';
import Divider from '../divider.js';

const Home = () => (
	<div>
		<ContentVideo breakpoint="12" embed21by9></ContentVideo>
		<Divider className='divider bg-blue-play'></Divider>
		<ContentMiddle carddefault></ContentMiddle>
	</div>
);

export default Home;
