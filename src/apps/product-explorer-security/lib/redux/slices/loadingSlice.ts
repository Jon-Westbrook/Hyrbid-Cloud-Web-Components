import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = true;

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingStatus: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});

export const { setLoadingStatus } = loadingSlice.actions;

export default loadingSlice.reducer;
