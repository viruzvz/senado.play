import React from 'react';
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
        <Navbar color="faded" dark expand="md">
          <NavbarBrand href="/">Senado Play</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="#">Ao vivo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Plenário e Comissões</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Senadores</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Programas</NavLink>
              </NavItem>
            </Nav>          
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Buscar</NavLink>
              </NavItem>
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