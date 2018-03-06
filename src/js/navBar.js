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
            <Navbar color="faded" color='black' dark expand="md" className='px-0'>
              <NavbarBrand className='m-0 p-0' href="/">
                <ReactSVG
                    path='../assets/logo.svg'
                    callback={svg => console.log(svg)}
                    className="img-fluid"
                    wrapperClassName="wrapper-class-name"
                    style={{width: 100}}
                  />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mx-auto" navbar>
                  <NavItem className='mr-2 text-uppercase size--regular'>
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
