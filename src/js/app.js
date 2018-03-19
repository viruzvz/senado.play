import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap';
import '../styles/main.scss';
import '../styles/main.less';
import TemplateApp from './components/template.js';

export default class App extends Component {
  render() {
    return (
      <TemplateApp></TemplateApp>
    );
  }
}

render(<App />, document.getElementById('app'));
