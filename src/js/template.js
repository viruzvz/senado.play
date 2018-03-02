import React from 'react';
import NavbarTop from './nav.js';
import ContentFluid from './contentfluid.js';
// import ContentFluid from './contentfluid.js';

export default class TemplateApp extends React.Component {
  render() {
    return (
		<div>
		<NavbarTop></NavbarTop>
		<ContentFluid></ContentFluid>
		</div>
    );
  }
}