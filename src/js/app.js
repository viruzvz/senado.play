import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap';
import '../styles/main.scss';
import '../styles/main.less';

import doctosimage from '../assets/doctors.jpg'; // Importing image -> ADDED IN THIS STEP
console.log(doctosimage)
export default class Hello extends Component {
  render() {
    return (
      <div className='pull-right btn btn-primary'>
        CARLAO !!!aa!TRETA - DA - 123456asdads
        {/* ADDED IN THIS STEP */}
        <img src={ doctosimage } alt='Doctors Working' width='150px' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
