import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavSec extends React.Component {
  render() {
    return (
        <Nav>
          <NavItem active>
            <NavLink className='text-uppercase font-weight-bold size--regular link--white' href="#section1">Menu Body</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-uppercase font-weight-bold size--regular link--white' href="#section2">Menu Body</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-uppercase font-weight-bold size--regular link--white' href="#section3">Menu Body</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-uppercase font-weight-bold size--regular link--white' href="#section4">Menu Body</NavLink>
          </NavItem>
        </Nav>
    );
  }
}
