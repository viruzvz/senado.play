import React, { Component } from 'react';

export default class Timer extends React.Component {
  render() {
    return (
      <time {...this.props}>{this.props.children} 2:34</time>
    );
  }
}

