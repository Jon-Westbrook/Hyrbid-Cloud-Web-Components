import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JourneyAiState } from '../store';

export interface JourneyAiStatePresentation {
  transitioning: boolean;
  animRight: boolean;
}

export const initialState: JourneyAiStatePresentation = {
  transitioning: false,
  animRight: true,
};

export const slice = createSlice({
  name: 'presentation',
  initialState,
  reducers: {
    setTransitioning: (
      state,
      action: PayloadAction<JourneyAiStatePresentation['transitioning']>,
    ) => {
      state.transitioning = action.payload;
    },
    setAnimRight: (
      state,
      action: PayloadAction<JourneyAiStatePresentation['animRight']>,
    ) => {
      state.animRight = action.payload;
    },
  },
});

export const { setAnimRight, setTransitioning } = slice.actions;

export const selectTransitioning = (state: JourneyAiState): boolean =>
  state.presentation.transitioning;
export const selectAnimRight = (state: JourneyAiState): boolean =>
  state.presentation.animRight;

export default slice.reducer;
