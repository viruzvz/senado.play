import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navi extends React.Component {
	constructor(props) {
		super(props) 
		this.classUl=props.classUl
		this.classLi=props.classLi
		this.classA=props.classA
	}
	render() {
		return (
		    <ul className={this.classUl}>
		      <li className={this.classLi}><NavLink className={this.classA} exact activeClassName="current" to='/'>Inicial</NavLink></li>
		      <li className={this.classLi}><NavLink className={this.classA} exact activeClassName="current" to='/plenarioecomissoes'>Plenário e Comissões</NavLink></li>
		      <li className={this.classLi}><NavLink className={this.classA} exact activeClassName="current" to='/senadores'>Senadores</NavLink></li>
		      <li className={this.classLi}><NavLink className={this.classA} exact activeClassName="current" to='/programas'>Programas</NavLink></li>
		    </ul>
		);
	}
}
