import React from 'react';
import { Counter } from './client/features/counter/Counter.js';
import { LoginPage } from './client/features/loginPage/loginPage.js';
function App() {
	return (
		<div id='app'>
			REACT APP LOADED
			<Counter />
			<LoginPage />
		</div>
	);
}

export default App;
