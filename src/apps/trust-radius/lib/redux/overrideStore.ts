import { CarbonThemes } from '../../../../types/carbon';
import { configureStore, Store } from '@reduxjs/toolkit';
import { reviewsApi } from './slices/fetchReviewsSlice';

const buildStoreFromState = (state: any): Store =>
  configureStore({
    reducer: {
      [reviewsApi.reducerPath]: reviewsApi.reducer,
      theme: () => state.theme,
    },
  });

export default function overrideStore({
  themeOverride,
  numColsOverrides,
}: {
  themeOverride?: CarbonThemes;
  numColsOverrides?: 1 | 2 | 4;
}): Store {
  const defaultFakeState = {
    cols: { numCols: 4 },
    theme: CarbonThemes.WHITE,
  };
  const newState = { ...defaultFakeState };
  if (themeOverride) {
    newState.theme = themeOverride;
  }
  if (numColsOverrides) {
    newState.cols.numCols = numColsOverrides;
  }
  return buildStoreFromState(newState);
}
