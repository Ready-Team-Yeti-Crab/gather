import React from 'react';
import { UserIconContainer } from '../userIconContainer/UserIconContainer';
// import { useSelector, useDispatch } from 'react-redux';
// import { gather, login } from './mainPageSlice';
// import './loginPage.scss';
// import googleMap from '../MapDisplay.js';
import MapDisplay from '../MapDisplay'
// import UpdateUserInfo from '../updateUserInfo/UpdateUserInfo'

export default function MainPage() {
	//MAKE SURE TO IMPORT USESELECTOR IF YOU WANT TO ACCESS STATE
	// const totalUsers = useSelector((state) => state.mainPage.totalUsers);
	// const selectedUsers = useSelector((state) => state.mainPage.selectedUsers);
	// const dispatch = useDispatch();
	return (
		<div>
			Main Page!
			<div id='mainWrapper'>
				{/* <UpdateUserInfo /> */}
				<MapDisplay />
			This is MainPage.js
			</div>
			<div id='mainWrapper'>
				<UserIconContainer />
				{/* {googleMap}
				<button
					label='Gather'
					onClick={() => dispatch(gather(selectedUsers))}
				></button> */}
			</div>
		</div>
	)
}
