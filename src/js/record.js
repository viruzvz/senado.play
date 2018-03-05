import React, { Component } from 'react';
import '../styles/components/record.scss';

export default class Record extends React.Component {
  render() {
    return (
      <div className='d-flex d-inline-flex pr-2 pl-2 bg-gray-basic align-items-center'>
        <div className='mr-2 record bg-red-cord'></div>
        <div className='white'>AO VIVO</div>
      </div>
    );
  }
}
