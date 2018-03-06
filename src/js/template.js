import React from 'react';
import NavbarTop from './navBar.js';
import ContentFluid from './contentfluid.js';
import Divider from './divider.js';
import ContentMiddle from './contentMiddle.js';
import Footer from './footer.js';


export default class TemplateApp extends React.Component {
  render() {
    return (
		<div>
			<NavbarTop></NavbarTop>
			<ContentFluid></ContentFluid>
			<Divider></Divider>
			<ContentMiddle></ContentMiddle>
			<Footer></Footer>
		</div>
    );
  }
}