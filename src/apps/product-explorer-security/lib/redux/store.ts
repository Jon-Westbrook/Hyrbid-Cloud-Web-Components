import { configureStore } from '@reduxjs/toolkit';
import categoriesSliceReducer from './slices/categoriesSlice';
import loadingSliceReducer from './slices/loadingSlice';
import localeCodeSliceReducer from './slices/localeCodeSlice';
import messagesSlice from './slices/messagesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer,
    loading: loadingSliceReducer,
    localeCode: localeCodeSliceReducer,
    messages: messagesSlice,
  },
});

export type ProductExplorerSecurityState = ReturnType<typeof store.getState>;
export type ProductExplorerSecurityDispatch = typeof store.dispatch;
