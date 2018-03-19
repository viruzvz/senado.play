import React, { Component } from 'react';
import '../../styles/components/record.scss';

export default class Record extends React.Component {
  render() {
    return (
      <div className='record bg-gray-basic'>
        <div className='mr-1 record-live ml-1 bg-red-cord'></div>
        <span className='cut size--small ml-1 mr-1'>AO VIVO</span>
      </div>
    );
  }
}
