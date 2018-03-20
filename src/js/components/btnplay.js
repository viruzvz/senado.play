import React, { Component } from 'react';

export default class Record extends React.Component {
  render() {
    return (
    	<i {...this.props}>{this.props.children}</i>
    );
  }
}