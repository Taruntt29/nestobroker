import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    phoneNumber: '',
    userStatus: '',
  },
  reducers: {
    setNewUserPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setNewUserPhoneNumber } = loginSlice.actions;
export default loginSlice.reducer;
//
//
