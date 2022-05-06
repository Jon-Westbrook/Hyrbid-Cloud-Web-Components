import { ProductExplorerSecurityState } from './store';
import { mapProductsToCategories } from '../../../../common/product-explorer/lib/redux/slices/categoriesSlice';
import { products } from '../../assets/data/products';
import messages from '../../locales/messages';

export const defaultFakeState: ProductExplorerSecurityState = {
  categories: mapProductsToCategories(products),
  loading: false,
  messages: messages,
  localeCode: 'en',
};

export default defaultFakeState;
