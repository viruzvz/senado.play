import React, { Component } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import '../styles/components/inputsearch.scss';
export default class InputSearch extends React.Component {
  render() {
  return (
    <div>
      <InputGroup size="sm" className='search-sty'>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input type='search' placeholder="Buscar" />
      </InputGroup>
    </div>
  )
  }
};


