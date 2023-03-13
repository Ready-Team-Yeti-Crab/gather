import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginPage/loginPageSlice.js';
import { apiSlice } from '../features/api/apiSlice';
import userIconContainerReducer from '../features/userIconContainer/userIconContainerSlice.js';
//https://redux-toolkit.js.org/tutorials/quick-start
//creating our store - passing in reducers into store

export const store = configureStore({
	reducer: {
		login: loginReducer,
		userIconContainer: userIconContainerReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
