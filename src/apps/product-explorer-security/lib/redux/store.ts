import { configureStore } from '@reduxjs/toolkit';
import { products } from '../../assets/data/products';
import categoriesSliceReducer, {
  mapProductsToCategories,
} from './slices/categoriesSlice';
import loadingSliceReducer from './slices/loadingSlice';
import localeCodeSliceReducer from './slices/localeCodeSlice';
import messagesSlice from './slices/messagesSlice';
import messages from '../../locales/messages';

const categories = mapProductsToCategories(products);

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer,
    loading: loadingSliceReducer,
    localeCode: localeCodeSliceReducer,
    messages: messagesSlice,
  },
  preloadedState: {
    categories,
    messages,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
