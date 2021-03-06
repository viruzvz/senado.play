import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavSec extends React.Component {
  render() {
    return (
        <Nav className="menuStick">
          <NavItem data-target='#section1' className="menuStick-link"  active>
            <NavLink className='text-uppercase font-weight-bold size--regular link--cut' href="#section1">Menu Body</NavLink>
          </NavItem>
          <NavItem data-target='#section2' className="menuStick-link">
            <NavLink className='text-uppercase font-weight-bold size--regular link--cut' href="#section2">Menu Body</NavLink>
          </NavItem>
          <NavItem data-target='#section3' className="menuStick-link">
            <NavLink className='text-uppercase font-weight-bold size--regular link--cut' href="#section3">Menu Body</NavLink>
          </NavItem>
          <NavItem data-target='#section4' className="menuStick-link">
            <NavLink className='text-uppercase font-weight-bold size--regular link--cut' href="#section4">Menu Body</NavLink>
          </NavItem>
          <NavItem data-target='#section5' className="menuStick-link">
            <NavLink className='text-uppercase font-weight-bold size--regular link--cut' href="#section4">Menu Body</NavLink>
          </NavItem>
        </Nav>
    );
  }
}
