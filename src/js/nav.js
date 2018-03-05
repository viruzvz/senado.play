import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavSec extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink className='text-uppercase font-weight-bold white size--regular' href="#">Menu Body</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-uppercase font-weight-bold cut size--regular' href="#">Menu Body</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-uppercase font-weight-bold cut size--regular' href="#">Menu Body</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}