import React from 'react';
import '../../styles/components/divider.scss';

export default class Divider extends React.Component {
  render() {
    return (
    	<div {...this.props}>{this.props.children}</div>
    );
  }
}