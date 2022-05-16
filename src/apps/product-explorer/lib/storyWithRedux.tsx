import { ProductExplorerState } from './redux/store';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';
import { mapProductsToCategories } from '../../../common/product-explorer/lib/redux/slices/categoriesSlice';
import { products } from '../assets/data/products';
import messages from '../locales/messages';
import { IBMLocale } from 'src/common/mapValidLocale';

export const defaultFakeState: ProductExplorerState = {
  categories: mapProductsToCategories(products),
  loading: false,
  messages: messages,
  localeCode: IBMLocale.EN,
};

export default storyWithReduxDecorator(defaultFakeState);
