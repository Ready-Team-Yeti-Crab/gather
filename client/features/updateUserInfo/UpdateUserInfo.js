import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentLocation } from './updateUserInfoSlice';

export function updateUserInfo() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label='Submit Location'
          onClick={() => dispatch(changeCurrentLocation())}
        >
          Change Location
        </button>
      </div>
    </div>
  );
}
