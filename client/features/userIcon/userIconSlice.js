import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

//https://redux-toolkit.js.org/tutorials/quick-start

//export default counterSlice
export const userIconSlice = createSlice({
  name: 'userIcon',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = userIconSlice.actions;

export default userIconSlice.reducer;
