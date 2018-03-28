import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home.js';
import Plenario from '../pages/plenarioecomissoes.js';

const Main = () => (
	<main>
		<Switch>
		    <Route exact path='/' component={Home}></Route>
		    <Route exact path='/plenarioecomissoes' component={Plenario}></Route>
		</Switch>
	</main>
)

export default Main
