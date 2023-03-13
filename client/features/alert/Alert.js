import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Alert() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
    const alert =  

	return (
		<div class = "alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            <p>{alert}</p>
		</div>
	);
}
