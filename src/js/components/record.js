import React, { Component } from 'react';

export default class Record extends React.Component {
  render() {
    return (
	<div {...this.props}>
		{this.props.children}
		<div className='record-live bg-red-cord'></div>
		<span className='size--small ml-1 mr-1 font-weight-bold'>{this.props.text}</span>
	</div>
    );
  }
}
