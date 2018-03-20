import React from 'react';
import ReactDOM from 'react-dom';
import InputSearch from './inputSearch.js';

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

export default class NavbarTop extends React.Component {
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
      <div className='bg-black'>
      <Container>
        <Row>
          <Col>
            <Navbar color="faded" color='black' expand="md" className='navbar-play'>
              <NavbarBrand href="/">
                <img className='img-fluid' src='../../assets/logo.svg' alt='TV Senado' style={imgStyle} />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mx-auto" navbar>
                  <NavItem active className='mr-2 text-uppercase size--regular'>
                    <NavLink href="#">Ao vivo</NavLink>
                  </NavItem>
                  <NavItem className='mr-2 text-uppercase size--regular'>
                    <NavLink href="#">Plenário e Comissões</NavLink>
                  </NavItem>
                  <NavItem className='mr-2 text-uppercase size--regular'>
                    <NavLink href="#">Senadores</NavLink>
                  </NavItem>
                  <NavItem className='mr-2 text-uppercase size--regular'>
                    <NavLink href="#">Programas</NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>

                  <InputSearch></InputSearch>

                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
