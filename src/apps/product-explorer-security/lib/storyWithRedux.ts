import {
  ProductExplorerSecurityState,
  messagesInitialState,
  categoriesInitialState,
} from './redux/store';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';

export const defaultFakeState: ProductExplorerSecurityState = {
  categories: categoriesInitialState,
  loading: false,
  messages: messagesInitialState,
  localeCode: 'en',
};

export default storyWithReduxDecorator(defaultFakeState);
