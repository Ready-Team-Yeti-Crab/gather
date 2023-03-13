import React from 'react';
import { useDispatch } from 'react-redux';
import { register, login } from './loginPageSlice';
import './loginPage.scss';

export default function LoginPage() {
	//MAKE SURE TO IMPORT USESELECTOR IF YOU WANT TO ACCESS STATE
	// const val = useSelector((state) => state.property.value);
	const dispatch = useDispatch();
	let username = '';
	let password = '';
	return (
		<div>
			hi
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
				<br />

				<button
					label='Register'
					onClick={() =>
						dispatch(register({ username: username, password: password }))
					}
				>
					Register
				</button>
				<button
					label='Login'
					onClick={() =>
						dispatch(login({ username: username, password: password }))
					}
				>
					Login
				</button>
			</div>
		</div>
	);
}
