import { Meta, StoryFn } from '@storybook/react';
import ProductDetail from './ProductDetail';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithReduxDecorator from 'src/common/storybook/storyWithReduxDecorator';
import storyWithClassNameWrapper from 'src/common/storybook/storyWithClassNameWrapper';
import defaultFakeState from '../lib/redux/defaultFakeState';
import { products } from '../assets/data/products';

const stories: Meta = {
  title: 'Widgets/Solutions Explorer IT-Infra/Components/Product Detail',
  component: ProductDetail,
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Solutions Explorer IT Infra - Product Detail',
    }),
    storyWithClassNameWrapper('solutions-explorer-it-infra'),
  ],
};

const category = products.categories[0];

const props = {
  category: {
    ...category,
  },
  index: 0,
  products: category.products,
  selected: true,
};

const Template: StoryFn = () => <ProductDetail {...props} />;
export const Default = Template.bind({});

export default stories;
