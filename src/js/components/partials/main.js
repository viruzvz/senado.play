import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home.js';
import Plenario from '../pages/plenarioEcomissoes.js';
import Senadores from '../pages/senadores.js';
import Programas from '../pages/programas.js';
import Programacao from '../pages/programacao.js';
import PageVideo from '../pages/pageVideo.js';


const Main = () => (
	<main>
		<Switch>
		    <Route exact path='/' component={Home}></Route>
		    <Route exact path='/plenarioecomissoes' component={Plenario}></Route>
	        <Route exact path='/senadores' component={Senadores}></Route>
	        <Route exact path='/programas' component={Programas}></Route>
	        <Route exact path='/programacao' component={Programacao}></Route>
	        <Route exact path='/pagevideo' component={PageVideo}></Route>
		</Switch>
	</main>
)

export default Main
