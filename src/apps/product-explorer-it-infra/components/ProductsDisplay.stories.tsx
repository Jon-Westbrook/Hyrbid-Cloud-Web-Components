import ProductsDisplay from './ProductsDisplay';
import { Meta, StoryFn } from '@storybook/react';

import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';
import defaultFakeState from '../lib/redux/defaultFakeState';
import storyWithClassNameWrapper from '../../../common/storyWithClassNameWrapper';

const stories: Meta = {
  component: ProductsDisplay,
  title: 'Widgets/Product Explorer It-Infra/Components/Products Display',
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Product Explorer IT Infra - Products Display',
    }),
    storyWithClassNameWrapper('product-explorer-it-infra'),
  ],
};

const Template: StoryFn = (args) => <ProductsDisplay {...args} />;

export const Default = Template.bind({});

export default stories;
