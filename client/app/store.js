import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
//https://redux-toolkit.js.org/tutorials/quick-start
//creating our store - passing in reducers into store

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
