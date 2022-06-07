import { Meta, StoryFn } from '@storybook/react';
import { LinkType } from 'src/common/explorer/lib/types';
import ProductsDisplay from './ProductsDisplay';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithClassNameWrapper from 'src/common/storybook/storyWithClassNameWrapper';
import storyWithReduxDecorator from 'src/common/storybook/storyWithReduxDecorator';
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
  linkType: LinkType.product,
};

const Template: StoryFn = () => <ProductsDisplay {...props} />;
export const Default = Template.bind({});

export default stories;
