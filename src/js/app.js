import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap';
import '../styles/main.scss';
import '../styles/main.less';
import TemplateApp from './components/template.js';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<TemplateApp></TemplateApp>
			</BrowserRouter>
		);
	}
}

render(<App />, document.getElementById('app'));
