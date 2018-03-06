import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Share extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown  direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color='link' size='ms' className='size--small cut px-0'>
          COMPARTILHAR
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Facebook</DropdownItem>
          <DropdownItem disabled>Twitter</DropdownItem>
          <DropdownItem>Instagram</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}