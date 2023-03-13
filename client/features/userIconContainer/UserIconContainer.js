import React from 'react';
import { useGetFriendsQuery } from '../api/apiSlice';
import UserIcon from '../userIcon/UserIcon';
import { setFriends } from './userIconContainerSlice';
import { useDispatch } from 'react-redux';
// https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics

export const UserIconContainer = () => {
	const {
		data: friends,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetFriendsQuery();

	let content;

	if (isLoading) {
		content = 'Loading!';
	} else if (isSuccess) {
		content = friends.friendList.map((friend) => (
			<UserIcon key={friend._id} friend={friend} />
		));
	} else if (isError) {
		content = <div>{error.toString()}</div>;
	}
	console.log(friends);
	//don't need this. just for tracking friends easier in state
	const dispatch = useDispatch();
	dispatch(setFriends(friends));

	return (
		<section className='friends-list'>
			<h2>My Friends (UserIconContainer.js)</h2>
			{content}
		</section>
	);
};
