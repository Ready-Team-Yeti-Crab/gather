/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectUser } from './userIconSlice';
import { useState } from 'react';
const UserIcon = ({ username, location }) => {
	const dispatch = useDispatch();
	// let amISelected = useSelector((state) => state.addedToSession);
	const [bgcolor, setbgcolor] = useState('antiquewhite');

	return (
		<div>
			<div>
				<button
					className='userButton'
					onClick={() => {
						let tempColor = bgcolor === 'grey' ? 'antiquewhite' : 'grey';
						dispatch(selectUser({ username: username, location: location }));
						setbgcolor(tempColor);
					}}
					// color = bgcolor == 'green' ? 'antiquewhite' : 'green';
					// setbgColor(color);

					style={{ backgroundColor: bgcolor }}
				>
					{username}
				</button>
			</div>
		</div>
	);
};

export default UserIcon;
