import React, { useEffect } from 'react';
import MapDisplay from './client/features/MapDisplay';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import Counter from "./client/features/counter/Counter"
import LoginPage from './client/features/loginPage/LoginPage';
import { pageRender } from './client/features/loginPage/loginPageSlice';

function App() {
	const dispatch = useDispatch();
	// Going to do useEffect so that, on render, it pulls the information on which page to go to
	useEffect(() => {
		axios.get('http://localhost:3000/original').then((data) => {
			// data.data.location
			dispatch(pageRender(data.data.location));
		});
	}, []);
	const whichComp = useSelector((state) => state.login.componentRender);
	console.log(whichComp);
	const renderComp = [];
	if (whichComp === 'LoginPage') {
		renderComp.push(<LoginPage />);
	} else {
		renderComp.push(<MapDisplay />);
	}

	return (
		<>
			<div id='app'>
				REACT APP LOADED
				{renderComp}
				{/* <LoginPage />
				<MapDisplay /> */}
			</div>
		</>
	);
}

export default App;
