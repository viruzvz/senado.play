import React from 'react';
import ContentVideo from '../contentVideo.js';
import ContentMiddle from '../contentMiddle.js';
import Divider from '../divider.js';

const Home = () => (
	<div>
		<ContentVideo breakpoint="8" embed16by9 title="Lorem ipsum and current modern day relevance of blind text." text="O Lorem Ipsum é um texto que serve como modelo para simular conteúdo. É usado normalmente por designers na elaboração de projetos gráficos, como jornais, revistas e websites. A sua invenção remonta ao século XVI, "></ContentVideo>
		<Divider className='divider bg-blue-play'></Divider>
		<ContentMiddle carddefault></ContentMiddle>
	</div>
);

export default Home;