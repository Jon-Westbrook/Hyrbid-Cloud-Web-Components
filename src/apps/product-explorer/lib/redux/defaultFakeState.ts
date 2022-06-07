import { ProductExplorerState } from './store';
import { mapProductsToCategories } from '../../../../common/explorer/lib/redux/slices/categoriesSlice';
import { products } from '../../assets/data/products';
import messages from '../../locales/messages';

export const defaultFakeState: ProductExplorerState = {
  categories: mapProductsToCategories(products),
  loading: false,
  messages: messages,
  localeCode: 'en',
};

export default defaultFakeState;
