import { JourneyAiState } from './store';

import { initialState as scenesInitialState } from './slices/scenesSlice';
import { initialState as browserInitialState } from './slices/browserSlice';
import { initialState as presentationInitialState } from './slices/presentationSlice';

const defaultFakeState: JourneyAiState = {
  scenes: scenesInitialState,
  browser: browserInitialState,
  presentation: presentationInitialState,
};

export default defaultFakeState;
