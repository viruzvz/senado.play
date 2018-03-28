import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home.js';
import Plenario from '../pages/plenarioEcomissoes.js';
import Senadores from '../pages/senadores.js';

const Main = () => (
	<main>
		<Switch>
		    <Route exact path='/' component={Home}></Route>
		    <Route exact path='/plenarioecomissoes' component={Plenario}></Route>
		    <Route exact path='/senadores' component={Senadores}></Route>
		</Switch>
	</main>
)

export default Main
