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
        <DropdownToggle color='link' size='ms' className='size--small link--white px-0'>
          <i className="fas fa-share"></i> COMPARTILHAR
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Facebook</DropdownItem>
          <DropdownItem>Twitter</DropdownItem>
          <DropdownItem>Instagram</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}