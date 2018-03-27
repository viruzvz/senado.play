import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.js';
import About from './about.js';

const Main = () => (
	<main>
		<Switch>
		    <Route exact path='/' component={Home}></Route>
		    <Route exact path='/about' component={About}></Route>
		</Switch>
	</main>
)

export default Main