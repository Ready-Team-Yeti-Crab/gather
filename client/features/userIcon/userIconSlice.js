// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   addedToSession: new Map(),
//   userName: //get username from userIconContainer
// };

// //https://redux-toolkit.js.org/tutorials/quick-start

// //export default counterSlice
// export const userIconSlice = createSlice({
//   name: 'userIcon',
//   initialState,
//   reducers: {
//     selectUser: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
  
//       if (state.addedToSession.has(userName)) {
//         state.addedToSession.delete();
//       } else {
//         state.addedToSession.set(userName, true);
//       }
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { selectUser } = userIconSlice.actions;

// export default userIconSlice.reducer;
