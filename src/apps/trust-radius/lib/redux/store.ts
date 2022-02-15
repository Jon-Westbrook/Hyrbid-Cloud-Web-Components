import { configureStore } from '@reduxjs/toolkit';
import { reviewsApi } from './slices/fetchReviewsSlice';

export const store = configureStore({
  reducer: {
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    columns: () => {},
    products: () => {},
    palette: () => {},
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
