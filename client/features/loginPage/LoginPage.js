import React from 'react';
import { useDispatch } from 'react-redux';
import { register, login } from './loginPageSlice';
import './loginPage.scss';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
// import axios from 'axios'

export default function LoginPage() {
	//MAKE SURE TO IMPORT USESELECTOR IF YOU WANT TO ACCESS STATE
	// const val = useSelector((state) => state.property.value);
	const dispatch = useDispatch();
	let username = '';
	let password = '';
	let location = '';

	return (
		<div>
			This is LoginPage.js
			<div id='loginWrapper'>
				<input
					type='text'
					placeholder='Username'
					onChange={(e) => (username = e.target.value)}
				></input>
				<input
					type='text'
					placeholder='Password'
					onChange={(e) => (password = e.target.value)}
				></input>
				<input
					type='test'
					placeholder='Location'
					onChange={(e) => (location = e.target.value)}
				/>
				<br />

				<button
					label='Register'
					onClick={() => {
            dispatch(
							register({
								username: username,
								password: password,
								location: location,
							})
						)
          }
						
					}
				>
					Register
				</button>
				<button
					label='Login'
					onClick={() => {
						dispatch(login({ username: username, password: password }))
					}
					}
				>
					Login
				</button>
			</div>
		</div>
	);
}
