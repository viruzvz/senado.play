import React from 'react';
import ContentVideo from '../contentVideo.js';
import ContentMiddle from '../contentMiddle.js';
import Divider from '../divider.js';

export default class PageVideo extends React.Component {
componentDidMount() {
  window.scrollTo(0, 0)
}
  render() {
    return (
	<div>
		<div className='d-none d-sm-block'>
		<ContentVideo breakpoint="8" embed16by9 textwrapper title="Lorem ipsum and current modern day relevance of blind text." text="O Lorem Ipsum é um texto que serve como modelo para simular conteúdo. É usado normalmente por designers na elaboração de projetos gráficos, como jornais, revistas e websites. A sua invenção remonta ao século XVI, "></ContentVideo>
		</div>
		<div className='d-block d-sm-none'>
		<ContentVideo breakpoint="12" embed16by9 textwrapper title="Lorem ipsum and current modern day relevance of blind text." text="O Lorem Ipsum é um texto que serve como modelo para simular conteúdo. É usado normalmente por designers na elaboração de projetos gráficos, como jornais, revistas e websites. A sua invenção remonta ao século XVI, "></ContentVideo>
		</div>
		<Divider className='divider bg-blue-play'></Divider>
		<ContentMiddle carddefault></ContentMiddle>
	</div>
    );
  }
}
