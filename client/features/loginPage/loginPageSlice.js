import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  componentRender: ''
};

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
			}).then(() => {
				// console.log(res)
				window.location.reload(false)
			});
		},
		login: (state, action) => {
			fetch('/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(action.payload),
			}).then(() => window.location.reload(false));
		},
    pageRender: (state, action) => {
      if (action.payload === 'signup') {
        state.componentRender = 'LoginPage'
      }
      if (action.payload === 'main') {
        state.componentRender = 'MapDisplay'
      }
    }
	},
});

// Action creators are generated for each case reducer function
export const { register, login, pageRender } = loginPageSlice.actions;

export default loginPageSlice.reducer;
