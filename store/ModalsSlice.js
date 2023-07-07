import { createSlice } from '@reduxjs/toolkit/dist';

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    isBookAVisit: false,
  },

  reducers: {
    openBookAVisit: state => {
      state.isBookAVisit = true;
    },
    hideBookAVisit: state => {
      state.isBookAVisit = false;
    },
  },
});

export const { openBookAVisit, hideBookAVisit } = modalsSlice.actions;
export default modalsSlice.reducer;
