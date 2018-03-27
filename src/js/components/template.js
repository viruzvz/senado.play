import React from 'react';
import Navegation from './navigation.js';
import Divider from './divider.js';
import Main from './main.js';
import Footer from './footer.js';
import {Container, Row, Col,} from 'reactstrap';

export default class TemplateApp extends React.Component {
  render() {
    return (
		<div>
			<Navegation></Navegation>
			<Main></Main>
			<Footer></Footer>
		</div>
    );
  }
}