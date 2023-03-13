import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	friends: [],
};

//https://redux-toolkit.js.org/tutorials/quick-start

//make fetch call passing in username and password

//action should look like: {type: 'loginPage/register', payload : {username: 'username', password: 'password'}}
export const userIconContainerSlice = createSlice({
	name: 'userIconContainer',
	initialState,
	reducers: {
		setFriends: (state, action) => {
			state.friends = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setFriends } = userIconContainerSlice.actions;

export default userIconContainerSlice.reducer;
