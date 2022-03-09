import {
  ProductExplorerItInfraState,
  categoriesInitialState,
  messagesInitialState,
} from './redux/store';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';

export const defaultFakeState: ProductExplorerItInfraState = {
  categories: categoriesInitialState,
  loading: false,
  messages: messagesInitialState,
  localeCode: 'en',
};

export default storyWithReduxDecorator(defaultFakeState);
