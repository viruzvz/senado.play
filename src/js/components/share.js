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
      <div className='share'>
      
      <Dropdown  direction="up" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color='link' size='ms' className='size--small link--cut px-0'>
          <i className="fa fa-share"></i> COMPARTILHAR
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className='size--small'><i className="fa fa-facebook"></i> Facebook</DropdownItem>
          <DropdownItem className='size--small'><i className="fa fa-twitter"></i> Twitter</DropdownItem>
          <DropdownItem className='size--small'><i className="fa fa-instagram"></i> Instagram</DropdownItem>
          <DropdownItem className='size--small'><i className="fa fa-youtube"></i> Youtube</DropdownItem>
          <DropdownItem className='size--small'><i className="fa fa-copy"></i> <input type='text' name='copy' placeholder='https://youtu.be/D7rjLQuW2nQ' /></DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    );
  }
}
