import { ProductExplorerSecurityState } from './redux/store';
import { initialState as categoriesInitialState } from './redux/slices/categoriesSlice';
import { initialState as messagesInitialState } from './redux/slices/messagesSlice';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';

export const defaultFakeState: ProductExplorerSecurityState = {
  categories: categoriesInitialState,
  loading: false,
  messages: messagesInitialState,
  localeCode: 'en',
};

export default storyWithReduxDecorator(defaultFakeState);
