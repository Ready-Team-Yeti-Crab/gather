import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

//https://redux-toolkit.js.org/tutorials/quick-start

//make fetch call passing in username and password

//action should look like: {type: 'loginPage/register', payload : {username: 'username', password: 'password'}}
export const loginPageSlice = createSlice({
	name: 'loginPage',
	initialState,
	reducers: {
		register: (state, action) => {
			fetch('/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(action.payload),
			}).then((res) => console.log(res));
		},
		login: (state, action) => {
			fetch('/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(action.payload),
			}).then((res) => console.log(res));
		},
	},
});

// Action creators are generated for each case reducer function
export const { register, login } = loginPageSlice.actions;

export default loginPageSlice.reducer;
