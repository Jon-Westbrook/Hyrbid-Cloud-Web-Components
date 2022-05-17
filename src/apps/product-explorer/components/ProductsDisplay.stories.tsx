import { Meta, StoryFn } from '@storybook/react';
import ProductsDisplay from './ProductsDisplay';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithClassNameWrapper from 'src/common/storyWithClassNameWrapper';
import storyWithReduxDecorator from 'src/common/storyWithReduxDecorator';
import defaultFakeState from '../lib/redux/defaultFakeState';

const stories: Meta = {
  title: 'Widgets/Product Explorer/Components/Products Display',
  component: ProductsDisplay,
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Product Explorer - Products Display',
    }),
    storyWithClassNameWrapper('product-explorer'),
  ],
};

const props = {
  linkType: 'product',
};

const Template: StoryFn = () => <ProductsDisplay {...props} />;
export const Default = Template.bind({});

export default stories;
