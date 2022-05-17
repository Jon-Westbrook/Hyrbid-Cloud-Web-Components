import ProductDetail from './ProductDetail';
import { Meta, StoryFn } from '@storybook/react';
import { products } from '../assets/data/products';

import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';
import defaultFakeState from '../lib/redux/defaultFakeState';
import storyWithClassNameWrapper from '../../../common/storyWithClassNameWrapper';

const stories: Meta = {
  component: ProductDetail,
  title: 'Widgets/Product Explorer It-Infra/Components/Product Detail',
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Product Explorer IT Infra - Product Detail',
    }),
    storyWithClassNameWrapper('product-explorer-it-infra'),
  ],
};

const category = products.categories[0];

const props = {
  category,
  products: category.products,
  index: 0,
  selected: true,
};

const Template: StoryFn = () => <ProductDetail {...props} />;

export const Default = Template.bind({});

export default stories;
