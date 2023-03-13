import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginPage/loginPageSlice.js';
import { apiSlice } from '../features/api/apiSlice';
import userIconContainerReducer from '../features/userIconContainer/userIconContainerSlice.js';
import userIconReducer from '../features/userIcon/userIconSlice.js';
//https://redux-toolkit.js.org/tutorials/quick-start
//creating our store - passing in reducers into store

export const store = configureStore({
	reducer: {
		login: loginReducer,
		userIconContainer: userIconContainerReducer,
		userIcon: userIconReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
