import React from 'react';
import NavbarPlay from './navbarPlay.js';
import ContentFluid from './contentfluid.js';
import Divider from './divider.js';
import ContentMiddle from './contentMiddle.js';
import Footer from './footer.js';


export default class TemplateApp extends React.Component {
  render() {
    return (
		<div>
			<NavbarPlay></NavbarPlay>
			<ContentFluid></ContentFluid>
			<Divider className='divider bg-blue-play'></Divider>
			<ContentMiddle></ContentMiddle>
			<Footer></Footer>
		</div>
    );
  }
}