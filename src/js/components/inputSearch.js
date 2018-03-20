import React, { Component } from 'react';
import { InputGroup, InputGroupText, FormGroup, InputGroupAddon, Input } from 'reactstrap';

export default class InputSearch extends React.Component {
  render() {
  return (
    <form>
      <div className='search-sty d-flex justify-content-between'>
        <i className="fas fa-search pt-1 mt-1"></i>
        <Input type='search' bsSize="sm" className='form-control' placeholder="Buscar" />
      </div>
    </form>
  )
  }
};


