import { JourneyAiState } from './redux/store';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';
import { initialState as scenesInitialState } from './redux/slices/scenesSlice';
import { initialState as browserInitialState } from './redux/slices/browserSlice';
import { initialState as presentationInitialState } from './redux/slices/presentationSlice';

export const defaultFakeState: JourneyAiState = {
  scenes: scenesInitialState,
  browser: browserInitialState,
  presentation: presentationInitialState,
};

export default storyWithReduxDecorator(defaultFakeState);
