import React from 'react';
import MapDisplay from './client/features/MapDisplay';
import LoginPage from './client/features/loginPage/LoginPage';
import { UserIconContainer } from './client/features/userIconContainer/UserIconContainer';

function App() {
	return (
		<>
			<div id='app'>
				REACT APP LOADED
				<UserIconContainer />
			</div>
		</>
	);
}

export default App;
