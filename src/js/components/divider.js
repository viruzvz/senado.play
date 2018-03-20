import React from 'react';

export default class Divider extends React.Component {
  render() {
    return (
    	<div {...this.props}>{this.props.children}</div>
    );
  }
}
