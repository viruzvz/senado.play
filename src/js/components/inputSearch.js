import React, { Component } from 'react';
import { InputGroup, InputGroupText, FormGroup, InputGroupAddon, Input } from 'reactstrap';

export default class InputSearch extends React.Component {
  render() {
  return (
    <form>
      <div className='search-sty d-flex justify-content-between'>

        <Input type='search' bsSize="sm" className='form-control' placeholder="&#xF002;  Buscar" />
      </div>
    </form>
  )
  }
};


