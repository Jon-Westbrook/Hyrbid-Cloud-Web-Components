import { IBMLocale } from '../../../../../common/mapValidLocale';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JourneyAiState } from '../store';

export type NamedBreakpoint = 'mobile' | 'tablet' | 'lg' | 'xlg';

export interface JourneyAiStateBrowser {
  locale: IBMLocale;
  breakpoint: NamedBreakpoint;
}

export const initialState: JourneyAiStateBrowser = {
  locale: IBMLocale.EN,
  breakpoint: 'mobile',
};

export const slice = createSlice({
  name: 'browser',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<IBMLocale>) => {
      state.locale = action.payload;
    },
    setBreakpoint: (state, action: PayloadAction<NamedBreakpoint>) => {
      state.breakpoint = action.payload;
    },
  },
});

export const { setLocale, setBreakpoint } = slice.actions;
export const selectLocale = (state: JourneyAiState): IBMLocale =>
  state.browser.locale;
export const selectBreakpoint = (state: JourneyAiState): NamedBreakpoint =>
  state.browser.breakpoint;

export default slice.reducer;
