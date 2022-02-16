import { configureStore } from '@reduxjs/toolkit';
import sceneReducer from './slices/scenesSlice';
import browserReducer from './slices/browserSlice';
import presentationReducer from './slices/presentationSlice';

export const store = configureStore({
  reducer: {
    scenes: sceneReducer,
    browser: browserReducer,
    presentation: presentationReducer,
  },
});

// Infer the root state and dispatch types from the store itself.
export type JourneyAiState = ReturnType<typeof store.getState>;
export type JourneyAiDispatch = typeof store.dispatch;
