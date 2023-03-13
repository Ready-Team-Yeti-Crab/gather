import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalUsers=[];
	selectedUsers=[];
};

//https://redux-toolkit.js.org/tutorials/quick-start

export const mainPageSlice = createSlice({
	name: 'mainPage',
	initialState,
	reducers: {
		gather: (state) => {
			//dosomething
		},
	},
});

// Action creators are generated for each case reducer function
export const { gather } = mainPageSlice.actions;

export default mainPageSlice.reducer;
