import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnExpended from './components/UnExpanded';
import { Switch, Route } from 'react-router-dom';
// import AllExpanded from "./components/AllExpended";

function App() {
	return (
		<div className='container-fluid'>
			<Switch>
				<Route exact path='/' component={UnExpended} />
			</Switch>

			{/* <AllExpanded /> */}
		</div>
	);
}

export default App;
