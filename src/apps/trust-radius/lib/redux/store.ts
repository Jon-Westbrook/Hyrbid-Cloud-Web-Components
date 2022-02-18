import { configureStore } from '@reduxjs/toolkit';
import { reviewsApi } from './slices/fetchReviewsSlice';
import setThemeSlice from './slices/setThemeSlice';

export const store = configureStore({
  reducer: {
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    theme: setThemeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
