import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CarbonThemes } from '../../../../../types/carbon';

const initialState = CarbonThemes.WHITE;

const setThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<CarbonThemes>) => {
      state = action.payload;
    },
  },
});

export const { setTheme } = setThemeSlice.actions;

export default setThemeSlice.reducer;
