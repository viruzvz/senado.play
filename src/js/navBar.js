import React from 'react';
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
            <Navbar color="faded" dark expand="md" className='px-0'>
              <NavbarBrand href="/">Senado Play</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mx-auto" navbar>
                  <NavItem className='mr-2'>
                    <NavLink href="#">Ao vivo</NavLink>
                  </NavItem>
                  <NavItem className='mr-2'>
                    <NavLink href="#">Plenário e Comissões</NavLink>
                  </NavItem>
                  <NavItem className='mr-2'>
                    <NavLink href="#">Senadores</NavLink>
                  </NavItem>
                  <NavItem className='mr-2'>
                    <NavLink href="#">Programas</NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <InputSearch></InputSearch>
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
