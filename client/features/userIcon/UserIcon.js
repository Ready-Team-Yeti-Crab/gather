import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './userIconSlice';

export function UserIcon() {
  const count = useSelector((state) => state.usericon.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
