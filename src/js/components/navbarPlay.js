import React from 'react';
import ReactDOM from 'react-dom';
import InputSearch from './inputSearch.js';
import Navi from './nav.js';

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import ReactSVG from 'react-svg';

var imgStyle = {
  width:'100px',
};

export default class NavbarPlay extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
render() {
        return (
            <Navbar color="faded" color='black' expand="md" className='navbar-play'>
                <NavbarBrand href="/">
                    <img className='img-fluid' src='../../assets/logo.svg' alt='TV Senado' style={imgStyle} />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Navi classUl='navbar-nav mx-auto' classLi='nav-item text-uppercase mx-2 size--regular' classA='nav-link link--cut'></Navi>
                    <Nav className="ml-auto" navbar>
                        <InputSearch></InputSearch>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
