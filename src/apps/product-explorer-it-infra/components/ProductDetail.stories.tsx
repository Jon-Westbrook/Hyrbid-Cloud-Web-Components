import ProductDetail from './ProductDetail';
import { Meta, StoryFn } from '@storybook/react';
import { products } from '../assets/data/products';

import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithRedux from '../lib/storyWithRedux';
import storyWithWrapper from '../lib/storyWithWrapper';

const stories: Meta = {
  component: ProductDetail,
  title: 'Product Explorer It-Infra/Components/Product Detail',
  decorators: [storyWithTranslation(), storyWithRedux(), storyWithWrapper()],
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
