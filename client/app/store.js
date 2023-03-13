import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginPage/loginPageSlice.js';
//https://redux-toolkit.js.org/tutorials/quick-start
//creating our store - passing in reducers into store

export const store = configureStore({
	reducer: {
		login: loginReducer,
	},
});
