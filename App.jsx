import React from 'react';
import MapDisplay from './client/features/MapDisplay';
import LoginPage from './client/features/loginPage/LoginPage';

function App() {
	return (
		<>
			<div id='app'>
				REACT APP LOADED
				<LoginPage />
				<MapDisplay />
			</div>
		</>
	);
}

export default App;
