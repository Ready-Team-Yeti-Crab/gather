/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectUser } from './userIconSlice';

const UserIcon = ({ username }) => {
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<button
					className='userButton'
					onClick={() => dispatch(selectUser(username))}
				>
					{username}
				</button>
			</div>
		</div>
	);
};

export default UserIcon;
