import React, { Component } from 'react';

export default class Timer extends React.Component {
  render() {
    return (
      <time {...this.props}>{this.props.children}{this.props.text}</time>
    );
  }
}

