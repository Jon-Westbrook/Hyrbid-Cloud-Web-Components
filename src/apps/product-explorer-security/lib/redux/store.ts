import { configureStore } from '@reduxjs/toolkit';
import loadingSliceReducer from '../../../../common/product-explorer/lib/redux/slices/loadingSlice';
import localeCodeSliceReducer from '../../../../common/product-explorer/lib/redux/slices/localeCodeSlice';
import createCategoriesSlice from '../../../../common/product-explorer/lib/redux/slices/categoriesSlice';
import createMessagesSlice from '../../../../common/product-explorer/lib/redux/slices/messagesSlice';
import { products } from '../../assets/data/products';
import messages from '../../locales/messages';

const categoriesSlice = createCategoriesSlice(products);
const messagesSlice = createMessagesSlice(messages);

export const categoriesInitialState = categoriesSlice.initialState;
export const messagesInitialState = messagesSlice.initialState;

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.slice.reducer,
    loading: loadingSliceReducer,
    localeCode: localeCodeSliceReducer,
    messages: messagesSlice.slice.reducer,
  },
});

export type ProductExplorerSecurityState = ReturnType<typeof store.getState>;
export type ProductExplorerSecurityDispatch = typeof store.dispatch;
