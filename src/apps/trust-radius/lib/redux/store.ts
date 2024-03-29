import { configureStore } from '@reduxjs/toolkit';
import { reviewsApi } from './slices/fetchReviewsSlice';
import setThemeSlice from './slices/setThemeSlice';

export const store = configureStore({
  reducer: {
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    theme: setThemeSlice,
  },
  devTools: { name: 'Trust Radius' },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewsApi.middleware),
});

export type TrustRadiusState = ReturnType<typeof store.getState>;
export type TrustRadiusDispatch = typeof store.dispatch;
