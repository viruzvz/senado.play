import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home.js';
import About from '../pages/about.js';

const Main = () => (
	<main>
		<Switch>
		    <Route exact path='/' component={Home}></Route>
		    <Route exact path='/about' component={About}></Route>
		</Switch>
	</main>
)

export default Main
