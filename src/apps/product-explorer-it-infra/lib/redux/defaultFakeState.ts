import { ProductExplorerItInfraState } from './store';
import { mapProductsToCategories } from '../../../../common/explorer/lib/redux/slices/categoriesSlice';
import { products } from '../../assets/data/products';
import messages from '../../locales/messages';

const defaultFakeState: ProductExplorerItInfraState = {
  categories: mapProductsToCategories(products),
  loading: false,
  messages: messages,
  localeCode: 'en',
};

export default defaultFakeState;
