import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const localeCodeSlice = createSlice({
  name: 'localeCode',
  initialState: '' as string,
  reducers: {
    setLocaleCode: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setLocaleCode } = localeCodeSlice.actions;

export default localeCodeSlice.reducer;
