import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JourneyAiState } from '../store';
import scenes, { Scene } from '../../../data/scenes';

export interface JourneyAiStateScenes {
  currentScene: null | number;
  homeNavIn: boolean;
  infocardIn: boolean;
}

export const initialState: JourneyAiStateScenes = {
  currentScene: null,
  homeNavIn: true,
  infocardIn: true,
};

export const slice = createSlice({
  name: 'scenes',
  initialState,
  reducers: {
    setCurrent: (
      state,
      action: PayloadAction<JourneyAiStateScenes['currentScene']>,
    ) => {
      state.currentScene = action.payload;
    },
    setHomeNavIn: (
      state,
      action: PayloadAction<JourneyAiStateScenes['homeNavIn']>,
    ) => {
      state.homeNavIn = action.payload;
    },
    setInfocardIn: (
      state,
      action: PayloadAction<JourneyAiStateScenes['infocardIn']>,
    ) => {
      state.infocardIn = action.payload;
    },
  },
});

export const { setCurrent, setHomeNavIn, setInfocardIn } = slice.actions;

export const selectCurrentSceneIndex = (
  state: JourneyAiState,
): JourneyAiStateScenes['currentScene'] => state.scenes.currentScene;
export const selectCurrentScene = (state: JourneyAiState): Scene | null => {
  const currentScene = state.scenes.currentScene;
  return currentScene === null ? null : scenes[currentScene];
};
export const selectHomeNavIn = (
  state: JourneyAiState,
): JourneyAiStateScenes['homeNavIn'] => state.scenes.homeNavIn;
export const selectInfocardIn = (
  state: JourneyAiState,
): JourneyAiStateScenes['infocardIn'] => state.scenes.infocardIn;

export default slice.reducer;
