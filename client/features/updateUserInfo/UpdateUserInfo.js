import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrentLocation } from './updateUserInfoSlice';

export default function updateUserInfo() {
  const dispatch = useDispatch();
  let location = '';

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Update Your Location'
          onChange={(e) => (location = e.target.value)}
        ></input>
        <button
          label='Submit Location'
          onClick={() => dispatch(changeCurrentLocation(location))}
        >
          Change Location
        </button>
      </div>
    </div>
  );
}
