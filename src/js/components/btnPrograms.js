import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class BtnPrograms extends React.Component {
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
    	<div className={this.props.styleName}>
			<ButtonDropdown direction='left' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle>
					<i className='fa fa-play size--middle'></i>
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem><a href='#' className='p-1 link--cut'><i className='fa fa-file'></i> PROGRAMAÇÃO COMPLETA</a></DropdownItem>
					<DropdownItem><a href='#' className='p-1 link--cut'><i className='red-cord fa fa-play'></i> AO VIVO TV SENADO</a></DropdownItem>
				</DropdownMenu>
			</ButtonDropdown>
		</div>
    );
  }
}
