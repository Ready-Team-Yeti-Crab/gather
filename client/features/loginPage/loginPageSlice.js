import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

//https://redux-toolkit.js.org/tutorials/quick-start

export const loginPageSlice = createSlice({
	name: 'loginPage',
	initialState,
	reducers: {
		register: (state, action) => {
			//make fetch call passing in username and password
			fetch('/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(action.payload),
			});
			//update alert state

			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes

			// action === {type: 'register', payload: {username: username, password: password}}
		},
		login: (state, action) => {
			//CONFIRM WITH BACKEND REGARDING EXISING USER LOGIN ENDPOINT
			fetch('/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(action.payload),
			});
		},
	},
});

// Action creators are generated for each case reducer function
export const { register, login } = loginPageSlice.actions;

export default loginPageSlice.reducer;
