import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

//https://redux-toolkit.js.org/tutorials/quick-start

export const loginPageSlice = createSlice({
	name: 'loginPage',
	initialState,
	reducers: {
		register: (state, action) => {
			const { username, password } = action.payload;
			//make fetch call passing in username and password

			//update alert state
			//

			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
			// action === {type: 'register', payload: {username: username, password: password}}
		},
		login: (state, action) => {
			state.value -= 1;
		},
		// incrementByAmount: (state, action) => {
		// 	state.value += action.payload;
		// },
	},
});

// Action creators are generated for each case reducer function
export const { register, decrement } = loginPageSlice.actions;

export default loginPageSlice.reducer;
