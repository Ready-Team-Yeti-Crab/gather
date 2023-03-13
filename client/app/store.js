import { configureStore } from '@reduxjs/toolkit';
import userIconReducer from '../features/userIcon/userIconSlice';
//https://redux-toolkit.js.org/tutorials/quick-start
//creating our store - passing in reducers into store

export const store = configureStore({
	reducer: {
		userIcon: userIconReducer,
	},
});
