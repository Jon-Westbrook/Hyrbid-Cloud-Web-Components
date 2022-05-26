import { configureStore } from '@reduxjs/toolkit';
import loadingSliceReducer from '../../../../common/product-explorer/lib/redux/slices/loadingSlice';
import localeCodeSliceReducer from '../../../../common/product-explorer/lib/redux/slices/localeCodeSlice';
import createCategoriesSlice from '../../../../common/product-explorer/lib/redux/slices/categoriesSlice';
import createMessagesSlice from '../../../../common/product-explorer/lib/redux/slices/messagesSlice';
import { products } from '../../assets/data/products';
import messages from '../../locales/messages';

const categoriesSlice = createCategoriesSlice(products);
const messagesSlice = createMessagesSlice(messages);

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    loading: loadingSliceReducer,
    localeCode: localeCodeSliceReducer,
    messages: messagesSlice.reducer,
  },
});

export type ProductExplorerState = ReturnType<typeof store.getState>;
export type ProductExplorerDispatch = typeof store.dispatch;
