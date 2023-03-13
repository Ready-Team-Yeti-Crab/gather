import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { register, login } from './loginPageSlice';

export default function LoginPage() {
	//subscribe to alert state
	// const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	let username = '';
	let password = '';
	return (
		<div>
			<div>
				<input
					type='text'
					placeholder='Username'
					onChange={(e) => (username = e.target.value)}
				></input>
				<button
					label='Register'
					onClick={() =>
						dispatch(register({ username: username, password: password }))
					}
				>
					Register
				</button>

				<input
					type='text'
					placeholder='Password'
					onChange={(e) => (password = e.target.value)}
				></input>
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
