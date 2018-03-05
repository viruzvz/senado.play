import React, { Component } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
export default class InputSearch extends React.Component {
  render() {
  return (
    <div>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="Buscar" />
      </InputGroup>
    </div>
  )
  }
};


